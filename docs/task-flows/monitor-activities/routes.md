# Monitor Activities Routes

Below are the components to import and the router object to add to `routes.tsx` to implement the Monitor Activities Task Flow. See all routes implemented in the [demo-app](https://github.com/strudel-science/strudel-kit/blob/main/strudel-demo-app/src/app/routes.tsx).

### Import Statements

```js
import { ActivityDetail } from "./monitor-activities/ActivityDetail";
import { ActivityList } from "./monitor-activities/ActivityList";
import { MonitorActivitiesWrapper } from "./monitor-activities/MonitorActivitiesWrapper";
```

### Router Object

```js
{
  path: "/monitor-activities",
  element: <MonitorActivitiesWrapper />,
  children: [
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
```
