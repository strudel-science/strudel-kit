# Compare Data Route

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
