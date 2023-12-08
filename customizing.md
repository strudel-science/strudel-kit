# Customizing a task flow (notes)

In _strudel-ui_, change to the taskflows directory
```
cd src/taskflows
```

Make a new copy of one of the task flows:
```
cp -r Optimization MyAnalysis
```

In the new directory you created, rename the main task flow and settings file
```
cd MyAnalysis
mv Optimization.tsx MyAnalysisPage.tsx
mv OptimizationSettings.tsx MyAnalysisSettings.tsx
```

In that directory, edit _index.tsx_ to export your new task flow:
```typescript jsx
export { MyAnalysis } from './MyAnalysis';
```

Next edit the new task flow file, _MyAnalysis.tsx_, to export the new name

```typescript jsx
// export const Optimization: React.FC = () => {
export const MyAnalysis: React.FC = () => {
```

Look at the `App.tsx` in the root directory.
Any of the imports in that file from the task flow you copied need to be  renamed to use the new name. Then you need to rename the files and exports in your new task flow directory.
```typescript
/*
import { TaskFlowsPage } from './pages/TaskFlowsPage';
import { DataInputs } from './task-flows/Optimization/DataInputs';
import { Scenario } from './task-flows/Optimization/Scenario';
import { OptimizationSettings } from './task-flows/Optimization/OptimizationSettings';
import { RunningOptimization } from './task-flows/Optimization/RunningOptimization';
import { Results } from './task-flows/Optimization/Results';
 */
// Edit all these files to export the new names.
import { MyDataInputs } from './task-flows/MyAnalysis/DataInputs';
import { MyScenario } from './task-flows/MyAnalysis/Scenario';
import { MyResults } from './task-flows/MyAnalysis/Results';
// change filename as well:
import { MyAnalysisSettings } from './task-flows/MyAnalysis/MyAnalysisSettings';
import { RunningMyAnalysis } from './task-flows/MyAnalysis/Running';
```

Then add a new set of routes under `createBrowserRouter` that
point to the renamed components from the previous step.
```typescript jsx
const router = createBrowserRouter([
    // ... other routes here ...
    // My Analysis
  {
    path: "/myanalysis",
    element: <MyAnalysisPage />,
  },
  {
    path: "/myanalysis/scenario",
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
])
```

You also need to create a new page in the _pages_ subdirectory.
```shell
cp src/pages/OptimizationPage.tsx src/pages/MyAnalysisPage.tsx
```

Edit the page to point to your new task flow
```typescript jsx
// import { Optimization } from '../task-flows/Optimization';
import { MyAnalysis } from '../task-flows/MyAnalysis';
// ...
//export const OptimizationPage: React.FC = () => {
export const MyAnalysisPage: React.FC = () => {
// ...
  return (
    <AnalyticsProvider data={scenarios} columns={columns} dataIdField='Proteome_ID'> 
      {/* <Optimization /> */}
      <MyAnalysis />
    </AnalyticsProvider>
  )
```

Add the page to the _TaskFlowsPage.tsx_ in the _pages_ subdirectory
```typescript jsx
<Link component={RouterLink} to="myanalysis">
    My Analysis
</Link>
```

Now, finally, you can edit MyAnalysis!
Let's start by changing the project name.
In _MyAnalysis.tsx_ under the _task-flows/MyAnalysis_ directory, edit
the section with the project name.
```typescript jsx
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  My Amazing Analysis
</Typography>
```