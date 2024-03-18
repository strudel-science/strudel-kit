# Contribute Data Routes

Below are the components to import and the router object to add to `routes.tsx` to implement the Contribute Data Task Flow. See all routes implemented in the [demo-app](https://github.com/strudel-science/strudel-kit/blob/main/strudel-demo-app/src/app/routes.tsx).

### Import Statements

```js
import { ContributeDataWrapper } from "./contribute-data/ContributeDataWrapper";
import { ContributorPortal } from "./contribute-data/ContributorPortal";
import { NewDataset } from "./contribute-data/NewDataset";
import { Register } from "./contribute-data/Register";
import { ReviewDataset } from "./contribute-data/ReviewDataset";
```

### Router Object

```js
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
```
