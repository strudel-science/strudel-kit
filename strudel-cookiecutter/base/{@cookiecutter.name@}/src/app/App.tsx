import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { router } from './routes';
import { theme } from './theme';
import { AppProvider } from '../context/ContextProvider';

export const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppProvider appTitle="{@ cookiecutter.appTitle @}">
          <RouterProvider router={router} />
        </AppProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
