import React from 'react';
import { basename } from '../App';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { ExploreDataProvider } from './context/ContextProvider';
import definitions from './definitions.json';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';

/**
 * Top-level wrapper for the explore-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
export const ExploreDataWrapper: React.FC = () => {
  const entities = useDataFromSource('default/explore-data/genomes.tsv', basename);
        
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
          columns={definitions.columns.main.table} 
          filters={definitions.filters.main} 
          dataIdField='{@ cookiecutter.data.main.table.dataIdField @}'
        >
          <Outlet />
        </ExploreDataProvider>
      </Box>
    </Box>
  )
}