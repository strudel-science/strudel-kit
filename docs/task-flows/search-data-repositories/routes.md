# Search Data Repositories Routes

Below are the components to import and the router object to add to `routes.tsx` to implement the Search Data Repositories Task Flow. See all routes implemented in the [demo-app](https://github.com/strudel-science/strudel-kit/blob/main/strudel-demo-app/src/app/routes.tsx).

### Import Statements

```js
import { DatasetDetail } from "./search-data-repositories/DatasetDetail";
import { DatasetExplorer } from "./search-data-repositories/DatasetExplorer";
import { SearchDataRepositoriesWrapper } from "./search-data-repositories/SearchDataRepositoriesWrapper";
```

### Router Object

```js
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
```
