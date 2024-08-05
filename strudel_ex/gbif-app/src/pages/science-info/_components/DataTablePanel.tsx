import FilterListIcon from '@mui/icons-material/FilterList';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Button, Paper, Stack, TextField, Typography, Grid, Card, CardContent, CardMedia, Link, Pagination, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { GridEventListener, GridPaginationModel } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useExploreData } from '../_context/ContextProvider';
import { setPreviewItem, setSearch } from '../_context/actions';
import { PreviewPanel } from './PreviewPanel';

// Define an interface for the data items
interface DataItem {
  scientificName: string;
  eventDate?: string;
  country?: string;
  media?: { identifier: string }[];
  [key: string]: any; // This allows for additional fields not explicitly defined
}

interface DataTablePanelProps {
  onToggleFiltersPanel: () => any;
}

export const DataTablePanel: React.FC<DataTablePanelProps> = (props) => {
  const { state, dispatch } = useExploreData();
  
  // State to hold the rows of data
  const [rows, setRows] = useState<DataItem[]>([]);
  
  // State to manage pagination settings
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });
  
  // State to hold the total count of rows in the dataset
  const [rowCount, setRowCount] = useState(0);

  // State to manage view mode (table or gallery)
  const [isGalleryView, setIsGalleryView] = useState(false);

  // State to manage the visibility of the preview panel
  const [showPreviewPanel, setShowPreviewPanel] = useState(false);

  // Handler for row click event
  const handleRowClick: GridEventListener<'rowClick'> = (rowData) => {
    dispatch(setPreviewItem(rowData.row));
    setShowPreviewPanel(true); // Show the preview panel when a row is clicked
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

  // Handler to toggle between table and gallery views
  const toggleView = () => {
    setIsGalleryView(!isGalleryView);
  };

  return (
    <Paper>
      {/* Header section with filters, search, and view toggle */}
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
        <Button
          startIcon={isGalleryView ? <ViewListIcon /> : <ViewModuleIcon />}
          onClick={toggleView}
        >
          {isGalleryView ? 'Table View' : 'Gallery View'}
        </Button>
      </Stack>

      {isGalleryView ? (
        <>
          {/* Gallery view */}
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {rows.map((row) => (
              <Grid item key={row[state.dataIdField]} xs={12} sm={6} md={4} lg={3}>
                <Card>
                  {row.media && row.media.length > 0 && (
                    <CardMedia
                      component="img"
                      height="140"
                      image={row.media[0].identifier}
                      alt={row.scientificName}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6">
                      <Link onClick={() => handleRowClick({ row })} style={{ cursor: 'pointer' }}>
                        {row.scientificName}
                      </Link>
                    </Typography>
                    <Typography variant="body2">{row.eventDate}</Typography>
                    <Typography variant="body2">{row.country}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* Pagination and page size selector for gallery view */}
          <Stack direction="row" spacing={2} sx={{ padding: 2, alignItems: 'center', justifyContent: 'center' }}>
            <FormControl variant="outlined" size="small">
              <InputLabel>Rows</InputLabel>
              <Select
                value={paginationModel.pageSize}
                onChange={(e) => setPaginationModel({ ...paginationModel, pageSize: parseInt(e.target.value as string, 10) })}
                label="Rows per page"
              >
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
            <Pagination
              count={Math.ceil(rowCount / paginationModel.pageSize)}
              page={paginationModel.page + 1}
              onChange={(event, value) => setPaginationModel({ page: value - 1, pageSize: paginationModel.pageSize })}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </>
      ) : (
        /* Table view */
        <DataGrid
          rows={rows}
          rowCount={rowCount}
          pagination
          paginationMode="server"
          onPaginationModelChange={handlePaginationModelChange}
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
      )}
      {/* Preview panel */}
      {showPreviewPanel && (
        <PreviewPanel onClose={() => setShowPreviewPanel(false)} />
      )}
    </Paper>
  );
};
