import { Box, Button, Grid, TextField, TextFieldProps, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridEventListener, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import React from 'react';
import { useAnalytics } from './AnalyticsProvider';
import { DataGridPropsWithComplexDefaultValueBeforeProcessing } from '@mui/x-data-grid/internals';
import { setPreviewItem } from './actions';

export const AnalyticsDataTable: React.FC<DataGridPropsWithComplexDefaultValueBeforeProcessing> = (props) => {
  const {state, dispatch} = useAnalytics();

  const handleRowClick: GridEventListener<'rowClick'> = (rowData) => {
    console.log(rowData);
    dispatch(setPreviewItem(rowData.row));
  };

  return (
    <DataGrid
      rows={state.filteredData || []}
      columns={state.columns}
      disableColumnSelector
      {...props}
      onRowClick={handleRowClick}
      sx={{
        '& .MuiDataGrid-cell:focus-within': {
          outline: 'none'
        },
        '& .MuiDataGrid-overlayWrapper': {
          minHeight: '4rem'
        }
      }}
    />
  )
}