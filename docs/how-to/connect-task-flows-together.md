# How to Connect Task Flows Together

Task Flows don't always exist in isolation inside apps. Instead, Task Flows often fit together in various ways. In this article you will learn how to connect steps from two different task flows into a larger flow.

In this example, you will connect an Explore Data Task Flow with a Run Computation Task Flow. For your app you want to have an explorer page like the one in Explore Data but you also want to be able to run different computations based on a selected row from the explorer.

### 0. Add both Task Flows to your app

If you haven't already, add both the Explore Data and Run Computation Task Flows into your app:

```
strudel add-taskflow explore -t explore-data
strudel add-taskflow compute -t run-computation
```

Ensure both Task Flows also have route objects implemeted in `routes.tsx`.

### 1. Plan the page flow

First, you need to determine how the user should flow through the pages of the two apps. Where will a user go from one Task Flow to another? Are there any pages you should skip or eliminate? In this example, you want users to be able to click on a row and run a compuation for that row by clicking a new button in the `<PreviewPanel>` of the `<DataExplorer>`. Then you want users to be able to enter in some parameters, initiate the computation, and see some results.

### 2. Add direct links between pages from two Task Flows.

For this flow, you want users to go from the `<PreviewPanel>` in the Explore Data Task Flow to the `<Settings>` page in the Run Computation Task Flow. The first thing you need to do is create a new button link in the `<PreviewPanel>` that links to the `<Settings>` page. Open up `PreviewPanel.tsx` and add a new link and button right next to the "View Details" button:

```jsx
<Link component={RouterLink} to="/compute/scenario/settings">
  <Button variant="contained">
    Analyze
  </Button>
</Link>
```

In the `to` prop, you will notice that we are linking to the route of the settings page. Now, clicking this button will take us directly to that step. This is the most straightforward way to connect two Task Flows with STRUDEL Kit.

To add a link back to the `<DataExplorer>` page from the `<Settings>` page, open up `Scenario.tsx`, delete the whole `<Breadcrumbs>` component and replace it with a link button:

```jsx
<Link component={RouterLink} to="/explore">
  <Button variant="contained">
    Back to Explorer
  </Button>
</Link>
```

## Optional Steps

### Remove unused pages and elements

If you do not need to keep the original Run Computation Task Flow intact, then you can safely delete the unused pages/components from the routes tree and the file system. 

In this example, you are no longer using the `<DataInputs>` step or the original `<ComputationsList>`, so let's first remove those pages from the route tree in `routes.tsx`:

```jsx
{
  path: "/compute",
  element: <RunComputationWrapper />,
  children: [
    {
      path: "scenario",
      element: <Scenario />,
      children: [
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

Also, remove the import statements for `DataInputs` and `ComputationsList`:

```jsx
// Delete these two lines
import { ComputationsList } from "./compute/ComputationsList";
import { DataInputs } from "./compute/DataInputs";
```

Now you can safely remove `DataInputs.tsx` and `ComputationsList.tsx` from the `compute` directory (or whatever the name of your Run Computation directory is).

You should also delete the "Data Inputs" step from the `<Stepper>` component in `Settings.tsx`, `RunningComputation.tsx`, and `Results.tsx`:

```jsx
// Remove this code from Settings.tsx, RunningComputation.tsx, and Results.tsx
<Step key="Data Inputs">
  <StepLabel>
    <Link component={RouterLink} to="/run-computation/scenario/data-inputs" sx={{ color: 'inherit', textDecoration: 'none' }}>
      Test Data Inputs
    </Link>
  </StepLabel>
</Step>
```

### Update route structure

You may also prefer that the URL route for the compute steps are nested under the "explore" route. The easiest way to do that is to simply change the compute route from `/compute` to `/explore/compute`. Then, the subpages of the compute route will append to the new string, instead of just `/compute`:

```jsx
{
  path: "/explore/compute",
  element: <RunComputationWrapper />,
  children: [
    {
      path: "scenario",
      element: <Scenario />,
      children: [
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

To read more about how to set up the route structure, check out the [React Router docs and tutorials](https://reactrouter.com/en/main/start/overview).

## Limitations and Next Steps

These instructions have helped you connect the user interfaces of two different Task Flows but they did not cover how to connect the _data_ between two Task Flows. This is absolutely possible and necessary but requires more knowledge of the React state. If you would like help passing data between app sections and loading data dynamically based on URL parameters, check out the Telerik article on [React Basics: How to Use React Router v6](https://www.telerik.com/blogs/react-basics-how-to-use-react-router-v6), and Kent C. Dodds' article on [Application State Management in React](https://kentcdodds.com/blog/application-state-management-with-react).