import React, { useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DataGrid } from '../../components/DataGrid';
import { GridEventListener } from '@mui/x-data-grid';
import { setPreviewItem, setSearch } from '../../components/contexts/analytics/actions';

interface DataTablePanelProps {
  onToggleFiltersPanel: () => any
}

export const DataTablePanel: React.FC<DataTablePanelProps> = (props) => { 
  const {state, dispatch} = useAnalytics();

  const handleRowClick: GridEventListener<'rowClick'> = (rowData) => {
    console.log(rowData);
    dispatch(setPreviewItem(rowData.row));
  };

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setSearch(evt.target.value));
  };
  
  return (
    <Paper>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          padding: 2
        }}
      >
        <Typography variant="h6" component="h2" flex={1}>Entity List</Typography>
        <Button
          startIcon={<FilterListIcon />}
          onClick={props.onToggleFiltersPanel}
        >
          Filters
        </Button>
        <TextField 
          variant="outlined"
          label="Search" 
          size="small"
          onChange={handleSearch}
        />
      </Stack>
      <DataGrid
        rows={state.filteredData || []}
        getRowId={(row) => row[state.dataIdField]}
        columns={state.columns}
        disableColumnSelector
        initialState={{
          pagination: { paginationModel: { page: state.tablePage, pageSize: state.tablePageSize } }
        }}
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
    </Paper>      
  )
}