import { Box, Button, Grid, TextField, TextFieldProps, Typography } from '@mui/material';
import { DataGrid as MuiDataGrid, DataGridProps as MuiDataGridProps } from '@mui/x-data-grid';
import React from 'react';
// import { DataGridProps as MuiDataGridProps } from '@mui/x-data-grid/internals';

interface DataGridProps extends MuiDataGridProps {}

export const DataGrid: React.FC<DataGridProps> = (props) => {
  return (
    <MuiDataGrid
      {...props}
      sx={{ '{{' }}
        border: 0,
        '& .MuiDataGrid-cell:focus-within': {
          outline: 'none'
        },
        '& .MuiDataGrid-overlayWrapper': {
          minHeight: '4rem'
        },
        ...props.sx
      {{ '}}' }}
    />
  )
}