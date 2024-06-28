import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { GridEventListener, GridPaginationModel } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useExploreData } from '../_context/ContextProvider';
import { setPreviewItem, setSearch } from '../_context/actions';

interface DataTablePanelProps {
  onToggleFiltersPanel: () => any;
}

export const DataTablePanel: React.FC<DataTablePanelProps> = (props) => {
  const { state, dispatch } = useExploreData();
  
  // State to hold the rows of data
  const [rows, setRows] = useState([]);
  
  // State to manage pagination settings
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });
  
  // State to hold the total count of rows in the dataset
  const [rowCount, setRowCount] = useState(0);

  // Handler for row click event
  const handleRowClick: GridEventListener<'rowClick'> = (rowData) => {
    dispatch(setPreviewItem(rowData.row));
  };

  // Handler for search input change event
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setSearch(evt.target.value));
  };

  // Function to fetch data from the GBIF API based on the current page and page size
  const fetchData = async (page: number, pageSize: number) => {
    const offset = page * pageSize;
    const response = await fetch(`https://api.gbif.org/v1/occurrence/search?limit=${pageSize}&offset=${offset}`);
    const data = await response.json();
    setRows(data.results);
    setRowCount(data.count);
  };

  // Effect hook to fetch data whenever the pagination model changes
  useEffect(() => {
    fetchData(paginationModel.page, paginationModel.pageSize);
  }, [paginationModel]);

  // Handler for pagination model change event
  const handlePaginationModelChange = (model: GridPaginationModel) => {
    setPaginationModel(model);
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
        // Pass the fetched rows to the DataGrid
        rows={rows}
        
        // Set the total row count for server-side pagination
        rowCount={rowCount}
        
        // Enable pagination and set it to server-side mode
        pagination
        paginationMode="server"
        
        // Set the handler for pagination model change event
        onPaginationModelChange={handlePaginationModelChange}
        
        // Get row ID based on the data ID field
        getRowId={(row) => row[state.dataIdField]}
        
        // Pass the columns from state
        columns={state.columns}
        
        // Disable the column selector
        disableColumnSelector
        
        // Set the initial state for pagination
        initialState={{
          pagination: { paginationModel: { page: state.tablePage, pageSize: state.tablePageSize } }
        }}
        
        // Pass other props
        {...props}
        
        // Set the handler for row click event
        onRowClick={handleRowClick}
        
        // Custom styling
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
  );
};
