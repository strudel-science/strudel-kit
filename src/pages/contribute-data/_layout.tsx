import { Box } from '@mui/material';
import { ContributeDataProvider } from './-context/ContextProvider';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/contribute-data/_layout')({
  component: ContributeDataLayout,
});

/**
 * Top-level wrapper for the contribute-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
function ContributeDataLayout() {
  return (
    <Box>
      <ContributeDataProvider>
        <Outlet />
      </ContributeDataProvider>
    </Box>
  );
}

export default ContributeDataLayout;
