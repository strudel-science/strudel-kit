import React from 'react';
import './App.css';
import { ExploringEntities } from './task-flows/ExploringEntities/ExploringEntities';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Optimization } from './task-flows/Optimization';
import { TaskFlowsPage } from './pages/TaskFlowsPage';
import { OptimizationPage } from './pages/OptimizationPage';
import { DataInputs } from './task-flows/Optimization/DataInputs';
import { Scenario } from './task-flows/Optimization/Scenario';
import { OptimizationSettings } from './task-flows/Optimization/OptimizationSettings';
import { RunningOptimization } from './task-flows/Optimization/RunningOptimization';
import { Results } from './task-flows/Optimization/Results';
import { ExploringDatasetsPage } from './pages/ExploringDatasetsPage';
import { ExploringDatasets } from './task-flows/ExploringDatasets';
import { DatasetExplorer } from './task-flows/ExploringDatasets/DatasetExplorer';
import { DatasetDetail } from './task-flows/ExploringDatasets/DatasetDetail';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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
    element: <ExploringDatasets />,
    children: [
      {
        path: "/exploring-datasets",
        element: <DatasetExplorer />
      },
      {
        path: '/exploring-datasets/:datasetId',
        element: <DatasetDetail />
      }
    ]
  },
  {
    path: "/exploring-datasets/:datasetId",
    element: <ExploringDatasetsPage />,
  },
  {
    path: "/exploring-entities",
    element: <ExploringEntities />,
  },
  {
    path: "/optimization",
    element: <OptimizationPage />,
  },
  {
    path: "/optimization/scenario",
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
]);

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
