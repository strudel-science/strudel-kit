import FilterListIcon from '@mui/icons-material/FilterList';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Button, Paper, Stack, TextField, Typography, Grid, Card, CardContent, CardMedia, Link, Pagination, Select, MenuItem, FormControl, InputLabel, Box, LinearProgress } from '@mui/material';
import { GridEventListener, GridPaginationModel, GridRowParams } from '@mui/x-data-grid';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useExploreData } from '../_context/ContextProvider';
import { setPreviewItem, setSearch } from '../_context/actions';
import { PreviewPanel } from './PreviewPanel';
import { SciDataGrid } from '@strudel-science/components';
import { useQuery } from '@tanstack/react-query';

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

export const ServerDataTablePanel: React.FC<DataTablePanelProps> = (props) => {
  const { state, dispatch } = useExploreData();

  // State to manage pagination settings
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 25 });
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [offset, setOffest] = useState(page * pageSize);

  // Define query for this page and fetch data items
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['items', { pageSize, offset }],
    queryFn: async (): Promise<any> => {
      const response = await fetch(`https://api.gbif.org/v1/occurrence/search?limit=${pageSize}&offset=${offset}`);
      return await response.json();
    }
  });

  // State to manage view mode (table or gallery)
  const [isGalleryView, setIsGalleryView] = useState(false);

  // State to manage the visibility of the preview panel
  const [showPreviewPanel, setShowPreviewPanel] = useState(false);

  // Handler for row click event
  const handleRowClick = (rowData: any) => {
    dispatch(setPreviewItem(rowData.row));
    setShowPreviewPanel(true); // Show the preview panel when a row is clicked
  };

  // Handler for pagination model change event
  const handlePaginationModelChange = (model: GridPaginationModel) => {
    // Reset page to first when the page size changes
    const newPage = model.pageSize !== pageSize ? 0 : model.page;
    const newPageSize = model.pageSize;
    const newOffset = newPage * newPageSize;
    setPage(newPage);
    setPageSize(newPageSize);
    setOffest(newOffset);
  };

  // Handler to toggle between table and gallery views
  const toggleView = () => {
    setIsGalleryView(!isGalleryView);
  };

  // Show a loading icon while the query is pending
  if (isPending) {
    return (
      <DataTableWrapper 
        onToggleFiltersPanel={props.onToggleFiltersPanel} 
        toggleView={toggleView} 
        isGalleryView={isGalleryView}
      >
        <Box
          sx={{
            padding: 2
          }}
        >
          <LinearProgress variant="indeterminate" />
        </Box>
      </DataTableWrapper>
    )
  }

  // Show an error message if the query fails
  if (isError) {
    return (
      <DataTableWrapper 
        onToggleFiltersPanel={props.onToggleFiltersPanel} 
        toggleView={toggleView} 
        isGalleryView={isGalleryView}
      >
        {error.message}
      </DataTableWrapper>
    )
  }

  // Show the data when the query completes
  return (
    <DataTableWrapper 
      onToggleFiltersPanel={props.onToggleFiltersPanel} 
      toggleView={toggleView} 
      isGalleryView={isGalleryView}
    >
      {isGalleryView ? (
        <>
          {/* Gallery view */}
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {data.results.map((row: any) => (
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
                      <Link onClick={() => handleRowClick({ row, id: row.id, columns: state.columns })} style={{ cursor: 'pointer' }}>
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
              count={Math.ceil(data.count / paginationModel.pageSize)}
              page={paginationModel.page + 1}
              onChange={(event, value) => setPaginationModel({ page: value - 1, pageSize: paginationModel.pageSize })}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </>
      ) : (
        /* Table view */
        <SciDataGrid
          rows={data.results}
          rowCount={data.count}
          pagination
          paginationMode="server"
          onPaginationModelChange={handlePaginationModelChange}
          getRowId={(row) => row[state.dataIdField]}
          columns={state.columns}
          disableColumnSelector
          autoHeight
          initialState={{
            pagination: { paginationModel: { page, pageSize } }
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
    </DataTableWrapper>
  );
};

interface DataTableWrapperProps extends PropsWithChildren {
  onToggleFiltersPanel: () => void;
  isGalleryView: boolean;
  toggleView: () => void;
}

const DataTableWrapper: React.FC<DataTableWrapperProps> = ({
  onToggleFiltersPanel,
  isGalleryView,
  toggleView,
  children
}) => {
  const { dispatch } = useExploreData();

  // Handler for search input change event
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setSearch(evt.target.value));
  };

  return (
    <Paper
      sx={{
        minHeight: '600px'
      }}
    >
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
          onClick={onToggleFiltersPanel}
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
      {children}
    </Paper>
  )
}