---
title: 'Connecting Task Flows'
---

## How to Connect Task Flows Together

Task Flows don't always exist in isolation inside apps. Instead, Task Flows often fit together in various ways. In this article you will learn how to connect steps from two different task flows into a larger flow.

In this example, you will connect an Explore Data Task Flow with a Run Computation Task Flow. For this new app, you want to have an explorer page like the one in Explore Data but you also want to be able to run different computations based on a selected row from the explorer.

### 1. Add both Task Flows to your app

If you haven't already, add both the Explore Data and Run Computation Task Flows into your app:

```
cd src/pages
npx degit strudel-science/strudel-kit/src/pages/explore-data explore
npx degit strudel-science/strudel-kit/src/pages/run-computation compute
```

### 2. Plan the page flow

First, you need to determine how the user should flow through the pages of the two apps. Where will a user go from one Task Flow to another? Are there any pages you should skip or eliminate? In this example, you want users to be able to click on a row and run a compuation for that row by clicking a new button in the `<PreviewPanel>` of the `<DataExplorer>`. Then you want users to be able to enter in some parameters, initiate the computation, and see some results.

### 3. Add direct links between pages from two Task Flows.

For this flow, you want users to go from the `<PreviewPanel>` in the Explore Data Task Flow to the `<Settings>` page in the Run Computation Task Flow. The first thing you need to do is create a new button link in the `<PreviewPanel>` that links to the `<Settings>` page. Open up `PreviewPanel.tsx` inside the `_components` folder of the explore page and add a new link and button right next to the "View Details" button:

```jsx title="PreviewPanel.tsx"
<AppLink to="/compute/scenario/settings">
  <Button variant="contained">Analyze</Button>
</AppLink>
```

In the `to` prop, you will notice that we are linking to the route of the settings page. Now, clicking this button will take us directly to that step. This is the most straightforward way to connect two Task Flows with STRUDEL Kit.

To add a link back to the explore page from the settings page, open up `compute/_layout/$id/_layout.tsx` in the compute Task Flow folder, delete the whole `<Breadcrumbs>...</Breadcrumbs>` component, and replace it with a link button:

```jsx title="_layout.tsx"
<AppLink to="/explore">
  <Button variant="contained">Back to Explorer</Button>
</AppLink>
```

## Optional Steps

### Remove unused pages and elements

If you do not need to keep the original Run Computation Task Flow intact, then you can safely delete the unused pages/components from the file system.

In this example, you are no longer using the `data-inputs.tsx` page or the `index.tsx` page in the compute Task Flow directory. At this point you can safely delete those two files.

You should also delete the "Data Inputs" step from the `<Stepper>` component in `settings.tsx`, `running.tsx`, and `results.tsx` which all live in `compute/_layout/$id/_layout`:

```jsx
// Remove this code from `settings.tsx`, `running.tsx`, and `results.tsx`
<Step key={taskflow.pages.dataInputs.title}>
  <StepLabel>
    <AppLink
      to="/run-computation/$id/data-inputs"
      params={{ id: 'new' }}
      sx={{ color: 'inherit', textDecoration: 'none' }}
    >
      Data Inputs
    </AppLink>
  </StepLabel>
</Step>
```

## Limitations and Next Steps

These instructions have helped you connect the user interfaces of two different Task Flows but they did not cover how to connect the _data_ between two Task Flows. This is absolutely possible and necessary but requires more knowledge of the React state. If you would like help passing data between app sections and loading data dynamically based on URL parameters, check out the Kent C. Dodds' article on [Application State Management in React](https://kentcdodds.com/blog/application-state-management-with-react).
