import React, { useEffect, useState } from 'react';
import { basename } from '../App';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { ExploreDataProvider } from './context/ContextProvider';
import definitions from './definitions.json';
import { TopBar } from '../../components/TopBar';
import { getDataFromSource } from '../../utils/api.utils';

export const ExploreDataWrapper: React.FC = () => {
  const [entities, setEntities] = useState<any[]>([]);

  useEffect(() => {
    if (entities.length === 0) {
      const getData = async () => {
        const dataSource = 'default/genomes.tsv';
        const data = await getDataFromSource(dataSource, basename);
        setEntities(data);
      }
      getData();
    }
  }, []);

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        <ExploreDataProvider data={entities} columns={definitions.columns.main} filters={definitions.filters.main} dataIdField='Proteome_ID'>
          <Outlet />
        </ExploreDataProvider>
      </Box>
    </Box>
  )
}