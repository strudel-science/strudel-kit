import { Box, Button, Grid, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { AnalyticsProvider, useAnalytics } from '../components/Analytics/AnalyticsProvider';
import { AnalyticsDataTable } from '../components/Analytics/AnalyticsDataTable';
import { AnalyticsSearchField } from '../components/Analytics/AnalyticsSearchField';
import { FiltersPanel } from '../components/FiltersPanel';
import { CheckboxList } from '../components/CheckboxList';
import { setFilter, setPreviewItem } from '../components/Analytics/actions';
import { FilterGroup } from '../components/FilterGroup';

const getMainColumnSize = (showFiltersPanel: boolean, showPreviewPanel: boolean) => {
  if (!showFiltersPanel && !showPreviewPanel) {
    return 12;
  } else if (showFiltersPanel && !showPreviewPanel) {
    return 10;
  } else if (!showFiltersPanel && showPreviewPanel) {
    return 8;
  } else if (showFiltersPanel && showPreviewPanel) {
    return 6;
  }
}
  
export const ExploringEntities: React.FC = () => {
  const {state, dispatch} = useAnalytics();
  const [showFiltersPanel, setShowFiltersPanel] = useState(true);

  const handleCloseFilters = () => {
    setShowFiltersPanel(false);
  };
  
  const handleToggleFilters = () => {
    setShowFiltersPanel(!showFiltersPanel);
  }

  const handleClosePreview = () => {
    dispatch(setPreviewItem(null));
  }

  return (
    <Box>
      <Box 
        component="nav"
        sx={{
          backgroundColor: 'white',
          borderBottom: 'solid 1px',
          borderColor: 'neutral.main',
          padding: 1.5
        }}
      >
        <Typography variant="h6" component="h1">Project name</Typography>
      </Box>
      <Grid container>
        {showFiltersPanel && (
          <Grid item xs={2}>
            <FiltersPanel
              onClose={handleCloseFilters}
              sx={{
                backgroundColor: 'white',
                pt: 3,
                pb: 3,
                pl: 2,
                pr: 2
              }}
            >
              <FilterGroup name="Category 1">
                <CheckboxList
                  listLabel="First Name"
                  options={[
                    { label: 'Arya', value: 'Arya' },
                    { label: 'Cersei', value: 'Cersei' },
                    { label: 'Jon', value: 'Jon' }
                  ]}
                  onChange={(values) => dispatch(setFilter({ field: 'firstName', value: values, operator: 'contains one of' }))}
                />
                <CheckboxList
                  listLabel="Last Name"
                  options={[
                    { label: 'Lannister', value: 'Lannister' },
                    { label: 'Snow', value: 'Snow' },
                    { label: 'Targaryen', value: 'Targaryen' }
                  ]}
                  onChange={(values) => dispatch(setFilter({ field: 'lastName', value: values, operator: 'contains one of' }))}
                />
              </FilterGroup>
            </FiltersPanel>
          </Grid>
        )}
        <Grid item xs={getMainColumnSize(showFiltersPanel, !!state.previewItem)}>
          <Paper
            sx={{
              margin: 1
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                padding: 2
              }}
            >
              <Typography variant="h6" component="h1" flex={1}>Entity List</Typography>
              <Button
                startIcon={<FilterListIcon />}
                onClick={handleToggleFilters}
              >
                Filters
              </Button>
              <AnalyticsSearchField />
            </Stack>
            <AnalyticsDataTable />
          </Paper>
        </Grid>
        {state.previewItem && (
          <Grid item xs={4}>
            <Box
              sx={{
                backgroundColor: 'white',
                height: '100%',
                p: 2
              }}
            >
              <Stack direction="row">
                <Typography variant="h5" component="h2" flex={1}>{state.previewItem.id}</Typography>
                <IconButton onClick={handleClosePreview}><CloseIcon /></IconButton>
              </Stack>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}