import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { basename } from '../App';
import { TopBar } from '../../components/TopBar';
import { SearchDataRepositoriesProvider } from './context/ContextProvider';
import { getDataFromSource } from '../../utils/api.utils';
import definitions from './definitions.json';
  
export const SearchDataRepositoriesWrapper: React.FC = () => {
  const [datasets, setDatasets] = useState<any[]>([]);

  useEffect(() => {
    if (datasets.length === 0) {
      const getData = async () => {
        const dataSource = 'default/datasets.json';
        const data = await getDataFromSource(dataSource, basename);
        setDatasets(data);
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
        <SearchDataRepositoriesProvider 
          data={datasets} 
          dataIdField='id' 
          filters={definitions.filters.main} 
          cardFields={definitions.cards.main}
        >
          <Outlet />
        </SearchDataRepositoriesProvider>
      </Box>
    </Box>
  )
}