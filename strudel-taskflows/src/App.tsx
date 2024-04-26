import { routes } from '@generouted/react-router';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApiModal } from './components/ApiModal';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={createBrowserRouter(routes)} />
        <ApiModal />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
