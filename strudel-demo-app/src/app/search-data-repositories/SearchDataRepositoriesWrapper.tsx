import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { basename } from '../App';
import { SearchDataRepositoriesProvider } from './context/ContextProvider';
import definitions from './definitions.json';

/**
 * Top-level wrapper for the search-data-repositories Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
export const SearchDataRepositoriesWrapper: React.FC = () => {
  // strudel-kit-variable-next-line
  const datasets = useDataFromSource('default/search-data-repositories/datasets.json', basename)

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