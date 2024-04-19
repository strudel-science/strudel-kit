import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { CompareDataProvider } from './_context/ContextProvider';
import { basename } from '../../main';
import { config } from './_config/taskflow.config';

/**
 * Top-level wrapper for the compare-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
const CompareDataWrapper: React.FC = () => {
  // strudel-kit-variable-next-line
  const scenarios = useDataFromSource(config.data.list.source, basename);

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        {/* strudel-kit-variable-next-line */}
        <CompareDataProvider 
          data={scenarios || []} 
          columns={config.pages.index.tableColumns} 
          dataIdField='id'
        >
          <Outlet />
        </CompareDataProvider>
      </Box>
    </Box>
  )
}

export default CompareDataWrapper;