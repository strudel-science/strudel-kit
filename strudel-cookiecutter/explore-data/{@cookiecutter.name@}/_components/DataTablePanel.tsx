import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { GridEventListener } from '@mui/x-data-grid';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useExploreData } from '../_context/ContextProvider';
import { setPreviewItem, setSearch } from '../_context/actions';

interface DataTablePanelProps {
  onToggleFiltersPanel: () => any
}

/**
 * Main data table and its header section in the explore-data Task Flow.
 * Columns are configured based on definitions.columns.main.
 * Data in this table is filtered by the inputs in the filters panel.
 */
export const DataTablePanel: React.FC<DataTablePanelProps> = (props) => { 
  const {state, dispatch} = useExploreData();

  const handleRowClick: GridEventListener<'rowClick'> = (rowData) => {
    dispatch(setPreviewItem(rowData.row));
  };

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setSearch(evt.target.value));
  };
  
  /**
   * Content to render on the page for this component
   */
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