import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { CompareDataProvider } from './_context/ContextProvider';
import { taskflow } from './_config/taskflow.config';

/**
 * Top-level wrapper for the compare-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
const CompareDataWrapper: React.FC = () => {
  const scenarios = useDataFromSource(taskflow.data.items.source);

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        <CompareDataProvider 
          data={scenarios || []} 
          columns={taskflow.pages.index.tableColumns} 
          dataIdField='id'
        >
          <Outlet />
        </CompareDataProvider>
      </Box>
    </Box>
  )
}

export default CompareDataWrapper;