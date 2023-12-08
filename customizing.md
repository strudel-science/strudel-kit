# Customizing a task flow (notes)

In _strudel-ui_, change to the taskflows directory
```
cd src/taskflows
```

Make a new copy of one of the task flows:
```
cp -r Optimization MyAnalysis
```

In the new directory you created, rename the main task flow and settings file and, in this case, one other file with the word _Optimization_ in it (to avoid confusion).
```
cd MyAnalysis
mv Optimization.tsx MyAnalysisPage.tsx
mv OptimizationSettings.tsx MyAnalysisSettings.tsx
mv RunningOptimization.tsx Running.tsx
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
For each of the imports from the task flow you
copied (i.e., _task-flows/Optimization_), you will need
to do two things:
1) In the copy of the file (i.e. the corresponding file in _task-flows/MyAnalysis_), modify the line beginning with `export` to export a new, unique, name for the component (in this example, we just add the prefix "My").
2) Add a new import in `App.tsx` that imports that component, under the new name, from the copied file.

When you are done, the _App.tsx_ file will look something like this:
```typescript
// Optimization task-flow imports (leave these untouched):
import { OptimizationPage } from './pages/OptimizationPage';
import { DataInputs } from './task-flows/Optimization/DataInputs';
import { Scenario } from './task-flows/Optimization/Scenario';
import { OptimizationSettings } from './task-flows/Optimization/OptimizationSettings';
import { RunningOptimization } from './task-flows/Optimization/RunningOptimization';
import { Results } from './task-flows/Optimization/Results';
// New, added, imports
import { MyAnalysisPage } from './pages/MyAnalysisPage';
import { MyDataInputs } from './task-flows/MyAnalysis/DataInputs';
import { MyScenario } from './task-flows/MyAnalysis/Scenario';
import { MyAnalysisSettings } from './task-flows/MyAnalysis/MyAnalysisSettings';
import { RunningMyAnalysis } from './task-flows/MyAnalysis/Running';
import { MyResults } from './task-flows/MyAnalysis/Results';
```

Next, add a new set of routes under `createBrowserRouter` that
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

Add the page to the _pages/TaskFlowsPage.tsx_ file.
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
  My Analysis
</Typography>
```

To see your changes, start the server from the root directory:
```shell
npm start
```

The server will check files for changes, so if you leave it running while you continue to make  edits to the files, you can make 'live' edits. For example, if you edited the _MyAnalysis.tsx_ file to change  the project name to "My Amazing Analysis", that would almost immediately show up in the page.