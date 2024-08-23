import { Alert, Box, LinearProgress, Skeleton } from '@mui/material';
import { GridPaginationModel } from '@mui/x-data-grid';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { SciDataGrid } from '../../../components/SciDataGrid';
import { filterData } from '../../../utils/filters.utils';
import { createFilterParams } from '../../../utils/queryParams.utils';
import { taskflow } from '../_config/taskflow.config';
import { useExploreData } from '../_context/ContextProvider';
import { setPreviewItem } from '../_context/actions';

/**
 * Query the data rows and render as an interactive table
 */
export const DataView: React.FC = () => {
  const { state, dispatch } = useExploreData();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [offset, setOffest] = useState(page * pageSize);
  const dataSource = taskflow.data.items.source;
  const filterConfigs = taskflow.pages.index.tableFilters;
  const queryMode = taskflow.data.items.queryMode;
  const staticParams = taskflow.data.items.staticParams;
  let queryParams = { ...staticParams };
  if (queryMode === 'server') {
    queryParams = {
      limit: pageSize.toString(),
      offset: offset.toString(),
      ...createFilterParams(state.activeFilters, state.filters)
    }
  }
  const queryString = new URLSearchParams(queryParams).toString()

  // Define query for this page and fetch data items
  const { isPending, isFetching, isError, data, error } = useQuery({
    queryKey: ['items', queryParams],
    queryFn: async (): Promise<any> => {
      const response = await fetch(`${dataSource}?${queryString}`);
      return await response.json();
    },
    placeholderData: keepPreviousData,
  });

  const handleRowClick = (rowData: any) => {
    dispatch(setPreviewItem(rowData.row));
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
        rows={queryMode === 'server' ? data.results : filterData(data, state.activeFilters, filterConfigs, state.searchTerm)}
        rowCount={queryMode === 'server' ? data.count : undefined}
        pagination
        paginationMode={queryMode}
        onPaginationModelChange={handlePaginationModelChange}
        getRowId={(row) => row[state.dataIdField]}
        columns={state.columns}
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