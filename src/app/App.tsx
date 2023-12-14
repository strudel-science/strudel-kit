import React from 'react';
import './App.css';
import { ExploringEntitiesWrapper } from './exploring-entities/ExploringEntitiesWrapper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { TaskFlowsPage } from './home/TaskFlowsPage';
import { ExploringDatasetsWrapper } from './exploring-datasets/ExploringDatasetsWrapper';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatasetExplorer } from './exploring-datasets/DatasetExplorer';
import { DatasetDetail } from './exploring-datasets/DatasetDetail';
import { OptimizationWrapper } from './optimization/OptimizationWrapper';
import { Scenario } from './optimization/Scenario';
import { DataInputs } from './optimization/DataInputs';
import { OptimizationSettings } from './optimization/OptimizationSettings';
import { RunningOptimization } from './optimization/RunningOptimization';
import { Results } from './optimization/Results';
import { ContributingDataWrapper } from './contributing-data/ContributingDataWrapper';
import { Register } from './contributing-data/Register';
import { ContributorPortal } from './contributing-data/ContributorPortal';

/**
 * TODO: Add more comments...
 * Maybe even for every attribute
 * TODO: Add link to MUI docs
 */
const theme = createTheme({
  /** What is palette? */
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
  /** What are components? */
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

export const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

/**
 * TODO: comment
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskFlowsPage />,
  },
  {
    path: "/exploring-datasets",
    element: <ExploringDatasetsWrapper />,
    children: [
      {
        index: true,
        element: <DatasetExplorer />
      },
      {
        path: ':datasetId',
        element: <DatasetDetail />
      }
    ]
  },
  {
    path: "/exploring-entities",
    element: <ExploringEntitiesWrapper />,
  },
  {
    path: "/optimization",
    children: [
      {
        index: true,
        element: <OptimizationWrapper />
      },
      {
        path: "scenario",
        element: <Scenario />,
        children: [
          {
            path: 'data-inputs',
            element: <DataInputs />
          },
          {
            path: 'settings',
            element: <OptimizationSettings />
          },
          {
            path: 'running',
            element: <RunningOptimization />
          },
          {
            path: 'results',
            element: <Results />
          }
        ]
      },
    ]
  },
  {
    path: "/contributing-data",
    element: <ContributingDataWrapper />,
    children: [
      {
        index: true,
        element: <Register />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'portal',
        element: <ContributorPortal />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
], {basename: basename});

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
