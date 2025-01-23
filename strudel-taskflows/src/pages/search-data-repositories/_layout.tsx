import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';

/**
 * Top-level wrapper for the search-data-repositories Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
const SearchDataRepositoriesLayout: React.FC = () => {
  // Content to render on the page for this component
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default SearchDataRepositoriesLayout;
