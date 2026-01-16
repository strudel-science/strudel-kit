import { CircularProgress, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createHashHistory,
  createRouter,
  ErrorComponent,
  RouterProvider,
} from '@tanstack/react-router';
import React from 'react';
import { ApiModal } from './components/ApiModal';
import { AppProvider } from './context/ContextProvider';
import { routeTree } from './routeTree.gen';
import { theme } from './theme';

const hashHistory = createHashHistory();
const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  history: hashHistory,
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  defaultPendingComponent: () => <CircularProgress size="2rem" />,
  context: {
    queryClient,
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppProvider>
            <RouterProvider router={router} context={{ queryClient }} />
            <ApiModal />
          </AppProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
};

export default App;
