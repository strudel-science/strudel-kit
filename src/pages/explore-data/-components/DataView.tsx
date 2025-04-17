import { Alert, Box, LinearProgress, Skeleton } from '@mui/material';
import { GridPaginationModel } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useFilters } from '../../../components/FilterContext';
import { SciDataGrid } from '../../../components/SciDataGrid';
import { filterData } from '../../../utils/filters.utils';
import { useListQuery } from '../../../hooks/useListQuery';
import { FilterConfig } from '../../../types/filters.types';

interface DataViewProps {
  filterConfigs: FilterConfig[];
  searchTerm: string;
  setPreviewItem: React.Dispatch<React.SetStateAction<any>>;
}
/**
 * Query the data rows and render as an interactive table
 */
export const DataView: React.FC<DataViewProps> = ({
  filterConfigs,
  searchTerm,
  setPreviewItem,
}) => {
  const { activeFilters } = useFilters();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [offset, setOffest] = useState(page * pageSize);
  // CUSTOMIZE: the unique ID field for the data source
  const dataIdField = 'Id';
  // CUSTOMIZE: query mode, 'client' or 'server'
  const queryMode = 'client';
  const { isPending, isFetching, isError, data, error } = useListQuery({
    activeFilters,
    // CUSTOMIZE: the table data source
    dataSource: 'dummy-data/exoplanets.csv',
    filterConfigs,
    offset,
    page,
    pageSize,
    queryMode,
    staticParams: null,
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
          padding: 2,
        }}
      >
        {indexedRows.map((row) => (
          <Skeleton key={row} height={50} />
        ))}
      </Box>
    );
  }

  // Show an error message if the query fails
  if (isError) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  // Show the data when the query completes
  return (
    <>
      {isFetching && <LinearProgress variant="indeterminate" />}
      <SciDataGrid
        rows={filterData(data, activeFilters, filterConfigs, searchTerm)}
        pagination
        paginationMode={queryMode}
        onPaginationModelChange={handlePaginationModelChange}
        getRowId={(row) => row[dataIdField]}
        // CUSTOMIZE: the table columns
        columns={[
          {
            field: 'Planet Name',
            headerName: 'Planet Name',
            width: 200,
          },
          {
            field: 'Planet Host',
            headerName: 'Planet Host',
            width: 200,
          },
          {
            field: 'Discovery Method',
            headerName: 'Discovery Method',
            width: 200,
          },
          {
            field: 'Orbital Period Days',
            headerName: 'Orbital Period',
            units: 'days',
            type: 'number',
            width: 200,
          },
          {
            field: 'Mass',
            headerName: 'Mass',
            units: 'Earth Mass',
            type: 'number',
            width: 200,
          },
          {
            field: 'Eccentricity',
            headerName: 'Eccentricity',
            type: 'number',
            width: 200,
          },
        ]}
        disableColumnSelector
        autoHeight
        initialState={{
          pagination: { paginationModel: { page, pageSize } },
        }}
        onRowClick={handleRowClick}
      />
    </>
  );
};
