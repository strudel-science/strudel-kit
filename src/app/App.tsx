import React from 'react';
import './App.css';
import { ExploringEntitiesWrapper } from './exploring-entities/ExploringEntitiesWrapper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
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
import { MyAnalysisPage } from './my-analysis/MyAnalysisPage';
import { MyScenario } from './my-analysis/Scenario';
import { MyDataInputs } from './my-analysis/DataInputs';
import { MyAnalysisSettings } from './my-analysis/MyAnalysisSettings';
import { RunningMyAnalysis } from './my-analysis/Running';
import { MyResults } from './my-analysis/Results';
import { NewDataset } from './contributing-data/NewDataset';
import { ReviewDataset } from './contributing-data/ReviewDataset';
import { MonitorTasksWrapper } from './monitor-tasks/MonitorTasksWrapper';
import { ExperimentCalendar } from './monitor-tasks/ExperimentCalendar';
import { ExperimentList } from './monitor-tasks/ExperimentList';
import { ExperimentDetail } from './monitor-tasks/ExperimentDetail';
import { CompareScenariosWrapper } from './compare-scenarios/CompareScenariosWrapper';
import { ScenarioList } from './compare-scenarios/ScenarioList';
import { ScenarioComparison } from './compare-scenarios/ScenarioComparison';
import { NewScenario } from './compare-scenarios/NewScenario';

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
const router = createHashRouter([
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
      },
      {
        path: 'new',
        element: <NewDataset />
      },
      {
        path: 'review',
        element: <ReviewDataset />
      }
    ]
  },
  {
    path: "/monitor-tasks",
    element: <MonitorTasksWrapper />,
    children: [
      // {
      //   index: true,
      //   element: <ExperimentCalendar />
      // },
      {
        index: true,
        element: <ExperimentList />,
      },
      {
        path: 'list',
        children: [
          {
            index: true,
            element: <ExperimentList />,
          },
          {
            path: 'detail',
            element: <ExperimentDetail />
          },
        ]
      },
    ]
  },
  {
    path: "/compare-scenarios",
    element: <CompareScenariosWrapper />,
    children: [
      {
        index: true,
        element: <ScenarioList />
      },
      {
        path: 'compare',
        element: <ScenarioComparison />
      },
      {
        path: 'new',
        element: <NewScenario />
      },
    ]
  },
  // My Analysis
  {
    path: "/myanalysis",
    element: <MyAnalysisPage />,
   },
   {
     path: "/myanalysis",
     element: <MyScenario />,
     children: [
       {
         path: 'data-inputs',
         element: <MyDataInputs />
       },
       {
         path: 'settings',
         element: <MyAnalysisSettings />
       },
       {
         path: 'running',
         element: <RunningMyAnalysis />
       },
       {
         path: 'results',
         element: <MyResults />
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
