import React from 'react';
import './App.css';
import { ExploreDataWrapper } from './explore-data/ExploreDataWrapper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import { TaskFlowsPage } from './home/TaskFlowsPage';
import { ExploringDatasetsWrapper } from './search-data-repositories/ExploringDatasetsWrapper';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatasetExplorer } from './search-data-repositories/DatasetExplorer';
import { DatasetDetail } from './search-data-repositories/DatasetDetail';
import { OptimizationWrapper } from './run-computation/OptimizationWrapper';
import { Scenario } from './run-computation/Scenario';
import { DataInputs } from './run-computation/DataInputs';
import { OptimizationSettings } from './run-computation/OptimizationSettings';
import { RunningOptimization } from './run-computation/RunningOptimization';
import { Results } from './run-computation/Results';
import { ContributingDataWrapper } from './contribute-data/ContributingDataWrapper';
import { Register } from './contribute-data/Register';
import { ContributorPortal } from './contribute-data/ContributorPortal';
import { MyAnalysisPage } from './my-analysis/MyAnalysisPage';
import { MyScenario } from './my-analysis/Scenario';
import { MyDataInputs } from './my-analysis/DataInputs';
import { MyAnalysisSettings } from './my-analysis/MyAnalysisSettings';
import { RunningMyAnalysis } from './my-analysis/Running';
import { MyResults } from './my-analysis/Results';
import { NewDataset } from './contribute-data/NewDataset';
import { ReviewDataset } from './contribute-data/ReviewDataset';
import { MonitorTasksWrapper } from './monitor-activities/MonitorTasksWrapper';
import { ExperimentCalendar } from './monitor-activities/ExperimentCalendar';
import { ExperimentList } from './monitor-activities/ExperimentList';
import { ExperimentDetail } from './monitor-activities/ExperimentDetail';
import { CompareDataWrapper } from './compare-data/CompareDataWrapper';
import { ScenarioList } from './compare-data/ScenarioList';
import { ScenarioComparison } from './compare-data/ScenarioComparison';
import { NewScenario } from './compare-data/NewScenario';
import { DataExplorer } from './explore-data/DataExplorer';
import { DataDetailPage } from './explore-data/DataDetailPage';

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
    path: "/search-data-repositories",
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
    path: "/explore-data",
    element: <ExploreDataWrapper />,
    children: [
      {
        index: true,
        element: <DataExplorer />
      },
      {
        path: ':datasetId',
        element: <DataDetailPage />
      }
    ]
  },
  {
    path: "/run-computation",
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
    path: "/contribute-data",
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
    path: "/monitor-activities",
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
    path: "/compare-data",
    element: <CompareDataWrapper />,
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
