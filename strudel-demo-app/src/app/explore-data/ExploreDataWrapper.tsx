import React, { useEffect, useState } from 'react';
import { basename } from '../App';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { ExploreDataProvider } from './context/ContextProvider';
import definitions from './definitions.json';
import { TopBar } from '../../components/TopBar';
import { getDataFromSource } from '../../utils/api.utils';

/**
 * Top-level wrapper for the explore-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
export const ExploreDataWrapper: React.FC = () => {
  const [entities, setEntities] = useState<any[]>([]);

  /**
   * Fetch data for the main table when the page loads
   */
  useEffect(() => {
    if (entities.length === 0) {
      const getData = async () => {
        // strudel-kit-variable-next-line
        const dataSource = 'default/explore-data/genomes.tsv';
        const data = await getDataFromSource(dataSource, basename);
        setEntities(data);
      }
      getData();
    }
  }, []);

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
          // strudel-kit-variable-next-line
          dataIdField='Proteome_ID'
        >
          <Outlet />
        </ExploreDataProvider>
      </Box>
    </Box>
  )
}