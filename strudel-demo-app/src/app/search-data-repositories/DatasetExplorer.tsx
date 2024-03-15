import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { DataListPanel } from './DataListPanel';
import { FiltersPanel } from './FiltersPanel';
import { PreviewPanel } from './PreviewPanel';
import { useSearchDataRepositories } from './context/ContextProvider';
import { setPreviewItem } from './context/actions';

/**
 * The main explore page for the search-data-repositories Task Flow.
 * Displays a page header, `<FiltersPanel>`, `<DataListPanel>`, and `<PreviewPanel>`.
 */
export const DatasetExplorer: React.FC = () => {
  const {state, dispatch} = useSearchDataRepositories();
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

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <PageHeader
        pageTitle="Dataset Releases"
        description="Datasets"
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
          <DataListPanel onToggleFiltersPanel={handleToggleFilters} />
        </Grid>
        {state.previewItem && (
          <Grid item xs={4}>
            <PreviewPanel onClose={handleClosePreview} />
          </Grid>
        )}
      </Grid>
    </Box>
  )
};

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
};