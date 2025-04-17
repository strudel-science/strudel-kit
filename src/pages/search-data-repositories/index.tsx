import { Box, Stack } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { FilterContext } from '../../components/FilterContext';
import { PageHeader } from '../../components/PageHeader';
import { FiltersPanel } from './-components/FiltersPanel';
import { DataListPanel } from './-components/DataListPanel';
import { PreviewPanel } from './-components/PreviewPanel';
import { FilterConfig } from '../../types/filters.types';

export const Route = createFileRoute('/search-data-repositories/')({
  component: DatasetExplorer,
});

// CUSTOMIZE: the filter definitions
const filterConfigs: FilterConfig[] = [
  {
    /**
     * Exact name of the property field in the data to filter on.
     */
    field: 'category',
    /**
     * Text to display in the label for the filter.
     */
    label: 'Category',
    operator: 'contains-one-of',
    /**
     * The kind of filter component and function to use. Must be "CheckboxList", "Slider", or "data range".
     */
    filterComponent: 'CheckboxList',
    /**
     * Extra options to pass to the filter based on the filter type.
     */
    filterProps: {
      options: [
        {
          label: 'Groundwater',
          value: 'Groundwater',
        },
        {
          label: 'Fires',
          value: 'Fires',
        },
        {
          label: 'Floods',
          value: 'Floods',
        },
        {
          label: 'Earthquakes',
          value: 'Earthquakes',
        },
      ],
    },
  },
  {
    field: 'tags',
    label: 'Tags',
    operator: 'contains-one-of',
    filterComponent: 'CheckboxList',
    filterProps: {
      options: [
        {
          label: 'Boreal forest',
          value: 'Boreal forest',
        },
        {
          label: 'Carbon and greenhouse gas emissions',
          value: 'Carbon and greenhouse gas emissions',
        },
        {
          label: 'Ecology',
          value: 'Ecology',
        },
      ],
    },
  },
  {
    field: 'publication_date',
    label: 'Publication Date',
    operator: 'between-dates-inclusive',
    filterComponent: 'DateRange',
  },
];

/**
 * The main explore page for the search-data-repositories Task Flow.
 * Displays a page header, `<FiltersPanel>`, `<DataListPanel>`, and `<PreviewPanel>`.
 */
function DatasetExplorer() {
  const [previewItem, setPreviewItem] = useState<any>();
  const [showFiltersPanel, setShowFiltersPanel] = useState(true);

  const handleCloseFilters = () => {
    setShowFiltersPanel(false);
  };

  const handleToggleFilters = () => {
    setShowFiltersPanel(!showFiltersPanel);
  };

  const handleClosePreview = () => {
    setPreviewItem(null);
  };

  return (
    <FilterContext>
      <Box>
        <PageHeader
          pageTitle="Search Data Repositories App"
          description="Description of this app section"
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
                  width: '350px',
                }}
              >
                <FiltersPanel
                  filterConfigs={filterConfigs}
                  onClose={handleCloseFilters}
                />
              </Box>
            )}
            <Box
              sx={{
                border: 'none',
                flex: 1,
                minHeight: '600px',
                minWidth: 0,
              }}
            >
              <DataListPanel
                filterConfigs={filterConfigs}
                onToggleFiltersPanel={handleToggleFilters}
                previewItem={previewItem}
                setPreviewItem={setPreviewItem}
              />
            </Box>
            {previewItem && (
              <Box
                sx={{
                  maxWidth: '600px',
                  minWidth: '400px',
                }}
              >
                <PreviewPanel
                  previewItem={previewItem}
                  onClose={handleClosePreview}
                />
              </Box>
            )}
          </Stack>
        </Box>
      </Box>
    </FilterContext>
  );
}
