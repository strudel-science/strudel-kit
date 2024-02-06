import { createHashRouter, Navigate } from "react-router-dom";
import { CompareDataWrapper } from "./compare-data/CompareDataWrapper";
import { NewScenario } from "./compare-data/NewScenario";
import { ScenarioComparison } from "./compare-data/ScenarioComparison";
import { ScenarioList } from "./compare-data/ScenarioList";
import { ContributeDataWrapper } from "./contribute-data/ContributeDataWrapper";
import { ContributorPortal } from "./contribute-data/ContributorPortal";
import { NewDataset } from "./contribute-data/NewDataset";
import { Register } from "./contribute-data/Register";
import { ReviewDataset } from "./contribute-data/ReviewDataset";
import { ExploreDataWrapper } from "./explore-data";
import { DataDetailPage } from "./explore-data/DataDetailPage";
import { DataExplorer } from "./explore-data/DataExplorer";
import { TaskFlowsPage } from "./home/TaskFlowsPage";
import { ActivityDetail } from "./monitor-activities/ActivityDetail";
import { ActivityList } from "./monitor-activities/ActivityList";
import { MonitorActivitiesWrapper } from "./monitor-activities/MonitorActivitiesWrapper";
import { MyDataInputs } from "./my-analysis/DataInputs";
import { MyAnalysisPage } from "./my-analysis/MyAnalysisPage";
import { MyAnalysisSettings } from "./my-analysis/MyAnalysisSettings";
import { MyResults } from "./my-analysis/Results";
import { RunningMyAnalysis } from "./my-analysis/Running";
import { MyScenario } from "./my-analysis/Scenario";
import { RunComputationWrapper } from "./run-computation";
import { DataInputs } from "./run-computation/DataInputs";
import { Settings } from "./run-computation/Settings";
import { Results } from "./run-computation/Results";
import { RunningComputation } from "./run-computation/RunningComputation";
import { Scenario } from "./run-computation/Scenario";
import { DatasetDetail } from "./search-data-repositories/DatasetDetail";
import { DatasetExplorer } from "./search-data-repositories/DatasetExplorer";
import { SearchDataRepositoriesWrapper } from "./search-data-repositories/SearchDataRepositoriesWrapper";

/**
 * App Router
 * Registers URL paths to page components.
 */
export const router = createHashRouter([
  {
    path: "/",
    element: <TaskFlowsPage />,
  },
  {
    path: "/search-data-repositories",
    element: <SearchDataRepositoriesWrapper />,
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
        element: <RunComputationWrapper />
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
            element: <Settings />
          },
          {
            path: 'running',
            element: <RunningComputation />
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
    element: <ContributeDataWrapper />,
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
    element: <MonitorActivitiesWrapper />,
    children: [
      // {
      //   index: true,
      //   element: <ActivityCalendar />
      // },
      {
        index: true,
        element: <ActivityList />,
      },
      {
        path: 'list',
        children: [
          {
            index: true,
            element: <ActivityList />,
          },
          {
            path: 'detail',
            element: <ActivityDetail />
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