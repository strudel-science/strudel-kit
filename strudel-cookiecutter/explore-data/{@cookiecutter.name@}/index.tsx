import { Box, Paper, Stack } from '@mui/material';
import React, { useState } from 'react';
import { FilterContext } from '../../components/FilterContext';
import { PageHeader } from '../../components/PageHeader';
import { DataView } from './_components/DataView';
import { DataViewHeader } from './_components/DataViewHeader';
import { FiltersPanel } from './_components/FiltersPanel';
import { PreviewPanel } from './_components/PreviewPanel';
import { taskflow } from './_config/taskflow.config';

/**
 * Main explorer page in the explore-data Task Flow.
 * This page includes the page header, filters panel, 
 * main table, and the table row preview panel.
 */
const DataExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [previewItem, setPreviewItem] = useState<any>();
  const [showFiltersPanel, setShowFiltersPanel] = useState(true);

  const handleCloseFilters = () => {
    setShowFiltersPanel(false);
  };
  
  const handleToggleFilters = () => {
    setShowFiltersPanel(!showFiltersPanel);
  }

  const handleClosePreview = () => {
    setPreviewItem(null);
  }

  return (
    <FilterContext>
      <Box>
        <PageHeader
          pageTitle={taskflow.pages.index.title}
          description={taskflow.pages.index.description}
          sx={{
            marginBottom: 1,
            padding: 2,
          }}
        />
        <Box>
          <Stack direction="row">
            {showFiltersPanel && (
              <Box
                sx={{
                  width: '350px'
                }}
              >
                <FiltersPanel onClose={handleCloseFilters} />
              </Box>
            )}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                minHeight: '600px',
                minWidth: 0,
              }}
            >
              <DataViewHeader
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onToggleFiltersPanel={handleToggleFilters}
              />
              <DataView
                searchTerm={searchTerm}
                setPreviewItem={setPreviewItem}
              />
            </Paper>
            {previewItem && (
              <Box
                sx={{
                  minWidth: '400px'
                }}
              >
                <PreviewPanel previewItem={previewItem} onClose={handleClosePreview} />
              </Box>
            )}
          </Stack>
        </Box>
      </Box>
    </FilterContext>
  )
}

export default DataExplorer;