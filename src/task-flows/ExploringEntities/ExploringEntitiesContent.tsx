import { Box, Button, Grid, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { AnalyticsProvider, useAnalytics } from '../../components/Analytics/AnalyticsProvider';
import { AnalyticsDataTable } from '../../components/Analytics/AnalyticsDataTable';
import { AnalyticsSearchField } from '../../components/Analytics/AnalyticsSearchField';
import { FiltersPanel } from '../../components/FiltersPanel';
import { CheckboxList } from '../../components/CheckboxList';
import { setFilter, setPreviewItem } from '../../components/Analytics/actions';
import { FilterGroup } from '../../components/FilterGroup';
import { Collapsible } from '../../components/Collapsible';
import { FilterField } from '../../components/FilterField';
import { EEFiltersPanel } from './EEFiltersPanel';
import { EEPreviewPanel } from './EEPreviewPanel';

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
  
export const ExploringEntitiesContent: React.FC = () => {
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
            <EEFiltersPanel onClose={handleCloseFilters} />
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
            <EEPreviewPanel onClose={handleClosePreview} />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}