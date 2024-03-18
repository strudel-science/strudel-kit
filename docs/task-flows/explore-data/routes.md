# Explore Data Routes

Below are the components to import and the router object to add to `routes.tsx` to implement the Explore Data Task Flow. See all routes implemented in the [demo-app](https://github.com/strudel-science/strudel-kit/blob/main/strudel-demo-app/src/app/routes.tsx).

### Import Statements

```js
import { ExploreDataWrapper } from "./explore-data";
import { DataDetailPage } from "./explore-data/DataDetailPage";
import { DataExplorer } from "./explore-data/DataExplorer";
```

### Router Object

```js
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
```
