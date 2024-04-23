import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { ContributeDataProvider } from './_context/ContextProvider';

/**
 * Top-level wrapper for the contribute-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
const ContributeDataLayout: React.FC = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        <ContributeDataProvider>
          <Outlet />
        </ContributeDataProvider>
      </Box>
    </Box>
  )
}

export default ContributeDataLayout;