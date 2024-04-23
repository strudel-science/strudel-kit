import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Routes } from '@generouted/react-router'
import { theme } from './theme';
import { AppProvider } from './context/ContextProvider';
import { ApiModal } from './components/ApiModal';

export const basename = document.querySelector('base')?.getAttribute('href') ?? '';

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* strudel-kit-variable-next-line */}
        <AppProvider appTitle="Demo App">
          <Routes />
          <ApiModal />
        </AppProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
