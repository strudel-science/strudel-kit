import { Box, Button, Grid, TextField, TextFieldProps, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import React from 'react';
import { useAnalytics } from './AnalyticsProvider';
import { DataGridPropsWithComplexDefaultValueBeforeProcessing } from '@mui/x-data-grid/internals';

export const AnalyticsDataTable: React.FC<DataGridPropsWithComplexDefaultValueBeforeProcessing> = (props) => {
  const {state, dispatch} = useAnalytics();

  return (
    <DataGrid
      rows={state.filteredData || []}
      columns={state.columns}
      disableColumnSelector
      disableRowSelectionOnClick
      {...props}
    />
  )
}