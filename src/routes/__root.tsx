import { Box, Stack } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Footer } from '../components/Footer';
import { TopBar } from '../components/TopBar';

/**
 * Basic layout with navbar and footer
 */
export const Route = createRootRoute({
  component: () => (
    <Stack
      spacing={0}
      sx={{
        height: '100%',
      }}
    >
      <TopBar />
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  ),
});
