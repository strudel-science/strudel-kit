import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { SearchDataRepositoriesProvider } from './_context/ContextProvider';
import { taskflow } from './_config/taskflow.config';

/**
 * Top-level wrapper for the search-data-repositories Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
const SearchDataRepositoriesLayout: React.FC = () => {
  const datasets = useDataFromSource(taskflow.data.items.source)

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        <SearchDataRepositoriesProvider 
          data={datasets} 
          dataIdField={taskflow.data.items.idField} 
          filters={taskflow.pages.index.cardFilters} 
          cardFields={taskflow.pages.index.cardFields}
        >
          <Outlet />
        </SearchDataRepositoriesProvider>
      </Box>
    </Box>
  )
}

export default SearchDataRepositoriesLayout;