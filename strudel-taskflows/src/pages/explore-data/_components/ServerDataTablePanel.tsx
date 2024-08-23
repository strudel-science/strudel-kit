import FilterListIcon from '@mui/icons-material/FilterList';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Box, Button, Card, CardContent, CardMedia, FormControl, Grid, InputLabel, LinearProgress, Link, MenuItem, Pagination, Paper, Select, Skeleton, Stack, TextField, Typography } from '@mui/material';
import { GridPaginationModel } from '@mui/x-data-grid';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { PropsWithChildren, useState } from 'react';
import { SciDataGrid } from '../../../components/SciDataGrid';
import { filterData } from '../../../utils/filters.utils';
import { createFilterParams } from '../../../utils/queryParams.utils';
import { taskflow } from '../_config/taskflow.config';
import { useExploreData } from '../_context/ContextProvider';
import { setPreviewItem, setSearch } from '../_context/actions';

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

  // State to manage view mode (table or gallery)
  const [isGalleryView, setIsGalleryView] = useState(false);

  // Handler for row click event
  const handleRowClick = (rowData: any) => {
    dispatch(setPreviewItem(rowData.row));
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

  // Show a loading skeleton while the initial query is pending
  if (isPending) {
    const emptyRows = new Array(pageSize);
    emptyRows.fill(null);
    const indexedRows = emptyRows.map((row, i) => i);

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
          {indexedRows.map((row) => (
            <Skeleton key={row} height={50} />
          ))}
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
      {isFetching && (
        <LinearProgress variant="indeterminate" />
      )}
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
          {...props}
          onRowClick={handleRowClick}
        />
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
    elevation={0}
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