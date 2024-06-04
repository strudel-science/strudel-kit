import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { routes } from '@generouted/react-router'
import { theme } from './theme';
import { AppProvider } from './context/ContextProvider';
import { ApiModal } from './components/ApiModal';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { config } from '../strudel.config';

const App: React.FC = () => {
  
  /**
   * Set the html title for the app using the title in the config.
   */
  useEffect(() => {
    document.title = config.title;
  }, []);

  console.log(import.meta.env);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppProvider>
          <RouterProvider router={createBrowserRouter(routes, { basename: import.meta.env.VITE_BASE_URL })} />
          <ApiModal />
        </AppProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
