import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { basename } from '../App';
import { TopBar } from '../../components/TopBar';
import { SearchDataRepositoriesProvider } from './context/ContextProvider';
import { getDataFromSource } from '../../utils/api.utils';
import definitions from './definitions.json';

/**
 * Top-level wrapper for the search-data-repositories Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
export const SearchDataRepositoriesWrapper: React.FC = () => {
  const [datasets, setDatasets] = useState<any[]>([]);

  /**
   * Fetch data for the cards list when the page loads
   */
  useEffect(() => {
    if (datasets.length === 0) {
      const getData = async () => {
        // strudel-kit-variable-next-line
        const dataSource = 'default/search-data-repositories/datasets.json';
        const data = await getDataFromSource(dataSource, basename);
        setDatasets(data);
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
        <SearchDataRepositoriesProvider 
          data={datasets} 
          // strudel-kit-variable-next-line
          dataIdField='id' 
          filters={definitions.filters.main} 
          cardFields={definitions.columns.main.card}
        >
          <Outlet />
        </SearchDataRepositoriesProvider>
      </Box>
    </Box>
  )
}