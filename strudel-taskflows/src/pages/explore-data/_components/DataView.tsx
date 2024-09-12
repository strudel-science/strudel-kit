import { Alert, Box, LinearProgress, Skeleton } from '@mui/material';
import { GridPaginationModel } from '@mui/x-data-grid';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { SciDataGrid } from '../../../components/SciDataGrid';
import { filterData } from '../../../utils/filters.utils';
import { createFilterParams } from '../../../utils/queryParams.utils';
import { taskflow } from '../_config/taskflow.config';
import { useFilters } from '../../../components/FilterContext';

interface DataViewProps {
  searchTerm: string;
  setPreviewItem: React.Dispatch<React.SetStateAction<any>>;
}
/**
 * Query the data rows and render as an interactive table
 */
export const DataView: React.FC<DataViewProps> = ({ searchTerm, setPreviewItem }) => {
  const { activeFilters } = useFilters();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [offset, setOffest] = useState(page * pageSize);
  const dataSource = taskflow.data.list.source;
  const dataIdField = taskflow.data.list.idField;
  const columns = taskflow.pages.index.tableColumns;
  const filterConfigs = taskflow.pages.index.tableFilters;
  const queryMode = taskflow.data.list.queryMode;
  const staticParams = taskflow.data.list.staticParams;
  // If in server mode, create query params from the active filters
  let queryParams = queryMode === 'server' ? createFilterParams(activeFilters, filterConfigs) : new URLSearchParams();
  // Tack on the static query params
  if (staticParams) {
    Object.keys(staticParams).forEach((param) => {
      queryParams.append(param, staticParams[param].toString());
    })
  }
  // If in server mode, tack on pagination query params
  if (queryMode === 'server') {
    queryParams.append('limit', pageSize.toString());
    queryParams.append('offset', offset.toString());
  }

  // The queryKey only needs to change dynamically in server mode
  const queryKey = queryMode === 'server' ? ['items', { ...activeFilters, pageSize, offset }] : ['items'];

  // Define query for this page and fetch data items
  const { isPending, isFetching, isError, data, error } = useQuery({
    queryKey,
    queryFn: async (): Promise<any> => {
      const queryString = queryParams.toString()
      const response = await fetch(`${dataSource}?${queryString}`);
      return await response.json();
    },
    placeholderData: keepPreviousData,
  });

  const handleRowClick = (rowData: any) => {
    setPreviewItem(rowData.row);
  };

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    // Reset page to first when the page size changes
    const newPage = model.pageSize !== pageSize ? 0 : model.page;
    const newPageSize = model.pageSize;
    const newOffset = newPage * newPageSize;
    setPage(newPage);
    setPageSize(newPageSize);
    setOffest(newOffset);
  };

  // Show a loading skeleton while the initial query is pending
  if (isPending) {
    const emptyRows = new Array(pageSize).fill(null);
    const indexedRows = emptyRows.map((row, i) => i);
    return (
      <Box
        sx={{
          padding: 2
        }}
      >
        {indexedRows.map((row) => (
          <Skeleton key={row} height={50} />
        ))}
      </Box>
    )
  }

  // Show an error message if the query fails
  if (isError) {
    return (
      <Alert severity="error">
        {error.message}
      </Alert>
    )
  }

  // Show the data when the query completes
  return (
    <>
      {isFetching && (
        <LinearProgress variant="indeterminate" />
      )}
      <SciDataGrid
        rows={queryMode === 'server' ? data.results : filterData(data, activeFilters, filterConfigs, searchTerm)}
        rowCount={queryMode === 'server' ? data.count : undefined}
        pagination
        paginationMode={queryMode}
        onPaginationModelChange={handlePaginationModelChange}
        getRowId={(row) => row[dataIdField]}
        columns={columns}
        disableColumnSelector
        autoHeight
        initialState={{
          pagination: { paginationModel: { page, pageSize } }
        }}
        onRowClick={handleRowClick}
      />
    </>
  );
};