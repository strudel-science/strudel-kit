import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { ExploreDataProvider } from './_context/ContextProvider';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { taskflow } from './_config/taskflow.config';

/**
 * Top-level wrapper for the explore-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
const ExploreDataLayout: React.FC = () => {
  // Test commit
  // Commit from feature/test
  const entities = useDataFromSource(taskflow.data.items.source);

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        <ExploreDataProvider 
          data={entities} 
          columns={taskflow.pages.index.tableColumns} 
          filters={taskflow.pages.index.tableFilters} 
          dataIdField={taskflow.data.items.idField}
        >
          <Outlet />
        </ExploreDataProvider>
      </Box>
    </Box>
  )
}

export default ExploreDataLayout;