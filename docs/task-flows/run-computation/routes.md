# Run Computation Routes

Below are the components to import and the router object to add to `routes.tsx` to implement the Run Computation Task Flow. See all routes implemented in the [demo-app](https://github.com/strudel-science/strudel-kit/blob/main/strudel-demo-app/src/app/routes.tsx).

### Import Statements

```js
import { RunComputationWrapper } from "./run-computation";
import { DataInputs } from "./run-computation/DataInputs";
import { Settings } from "./run-computation/Settings";
import { Results } from "./run-computation/Results";
import { RunningComputation } from "./run-computation/RunningComputation";
import { Scenario } from "./run-computation/Scenario";
```

### Router Object

```js
{
  path: "/run-computation",
  element: <RunComputationWrapper />,
  children: [
    {
      index: true,
      element: <ComputationsList />
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
```
