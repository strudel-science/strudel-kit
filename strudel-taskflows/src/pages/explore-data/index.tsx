import { Box, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import { FiltersPanel } from './_components/FiltersPanel';
import { PreviewPanel } from './_components/PreviewPanel';
import { PageHeader } from '../../components/PageHeader';
import { useExploreData } from './_context/ContextProvider';
import { setPreviewItem } from './_context/actions';
import { taskflow } from './_config/taskflow.config';
import { DataView } from './_components/DataView';
import { DataViewHeader } from './_components/DataViewHeader';

/**
 * Main explorer page in the explore-data Task Flow.
 * This page includes the page header, filters panel, 
 * main table, and the table row preview panel.
 */
const DataExplorer: React.FC = () => {
  const {state, dispatch} = useExploreData();
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
      <PageHeader
        pageTitle={taskflow.pages.index.title}
        description={taskflow.pages.index.description}
        sx={{
          marginBottom: 1,
          padding: 2,
        }}
      />
      <Grid container spacing={1}>
        {showFiltersPanel && (
          <Grid item xs={2}>
            <FiltersPanel onClose={handleCloseFilters} />
          </Grid>
        )}
        <Grid item xs={getMainColumnSize(showFiltersPanel, !!state.previewItem)}>
          <Paper
            elevation={0}
            sx={{
              minHeight: '600px'
            }}
          >
            <DataViewHeader onToggleFiltersPanel={handleToggleFilters} />
            <DataView />
          </Paper>
        </Grid>
        {state.previewItem && (
          <Grid item xs={4}>
            <PreviewPanel onClose={handleClosePreview} />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

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

export default DataExplorer;