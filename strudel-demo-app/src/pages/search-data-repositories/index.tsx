import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { DataListPanel } from './_components/DataListPanel';
import { FiltersPanel } from './_components/FiltersPanel';
import { PreviewPanel } from './_components/PreviewPanel';
import { useSearchDataRepositories } from './_context/ContextProvider';
import { setPreviewItem } from './_context/actions';
import { taskflow } from './_config/taskflow.config';

/**
 * The main explore page for the search-data-repositories Task Flow.
 * Displays a page header, `<FiltersPanel>`, `<DataListPanel>`, and `<PreviewPanel>`.
 */
const DatasetExplorer: React.FC = () => {
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

export default DatasetExplorer;