import { AppBar, Box, Link, Grid, IconButton, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { setPreviewItem } from '../../components/contexts/analytics/actions';
import { FiltersPanel } from './FiltersPanel';
import { PreviewPanel } from './PreviewPanel';
import { DataTablePanel } from './DataTablePanel';
import { PageHeader } from '../../components/PageHeader';
import { useExploreData } from './context/ContextProvider';

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
  
export const DataExplorer: React.FC = () => {
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
        pageTitle="Genome Releases"
        description="All gene sets have been annotated with KOG, KEGG, ENZYME, Pathway and the InterPro family of protein analysis tools."
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
          <DataTablePanel onToggleFiltersPanel={handleToggleFilters} />
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