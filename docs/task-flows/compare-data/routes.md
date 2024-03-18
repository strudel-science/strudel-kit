# Compare Data Routes

Below are the components to import and the router object to add to `routes.tsx` to implement the Compare Data Task Flow. See all routes implemented in the [demo-app](https://github.com/strudel-science/strudel-kit/blob/main/strudel-demo-app/src/app/routes.tsx).

### Import Statements

```js
import { CompareDataWrapper } from "./compare-data/CompareDataWrapper";
import { NewScenario } from "./compare-data/NewScenario";
import { ScenarioComparison } from "./compare-data/ScenarioComparison";
import { ScenarioList } from "./compare-data/ScenarioList";
```

### Router Object

```js
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
```
