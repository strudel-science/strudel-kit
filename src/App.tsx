import React from 'react';
import './App.css';
import { ExploringEntities } from './task-flows/ExploringEntities/ExploringEntities';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Optimization } from './task-flows/Optimization';
import { TaskFlowsPage } from './pages/TaskFlowsPage';
import { OptimizationPage } from './pages/OptimizationPage';

const theme = createTheme({
  palette: {
    background: {
      default: '#F5F5F6'
    },
    neutral: {
      main: '#DADADA',
      light: '#e0e0e0',
      dark: '#828282'
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { color: 'neutral' },
          style: {
            backgroundColor: 'white',
            borderColor: '#bdbdbd',
            color: '#757575'
          },
        },
      ],
    },
    MuiStack: {
      defaultProps: {
        spacing: 2
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskFlowsPage />,
  },
  {
    path: "/exploring-entities",
    element: <ExploringEntities />,
  },
  {
    path: "/optimization",
    element: <OptimizationPage />,
  },
]);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
