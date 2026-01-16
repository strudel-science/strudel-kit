import { Box, Stack } from '@mui/material';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { TopBar } from '../components/TopBar';

interface RouterContext {
  queryClient: QueryClient;
}

/**
 * Basic layout with navbar and footer
 */
export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <Stack
      spacing={0}
      sx={{
        height: '100%',
      }}
    >
      <TopBar />
      <Box
        component="main"
        sx={{
          flex: 1,
          paddingBottom: 4,
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  ),
});
