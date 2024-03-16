# How to Connect Task Flows Together

Often Task Flows don't exist in isolation inside apps. Instead, Task Flows often fit together in various ways. In this article you will learn how to connect steps from two different task flows into a larger flow.

In this example, you will connect an Explore Data Task Flow with a Run Computation Task Flow. For your app you want to have an explorer page like the one in Explore Data but you also want to be able to run different computations based on a selected row from the explorer.

### 0. Add both Task Flows to your app

If you haven't already, add both the Run Computation and Compare Data Task Flows into your app:

```
strudel add-taskflow explore -t explore-data
strudel add-taskflow compute -t run-computation
```

Ensure both Task Flows also have route objects implemeted in `routes.tsx`.

### 1. Plan the page flow

First, you need to determine how the user should flow through the pages of the two apps. Where will a user go from one Task Flow to another? Are there any pages you should skip or eliminate? In this example, you want users to be able to click on a row and run a compuation for that row by clicking a new button in the `<PreviewPanel>`. Then you want users to be able to enter in some parameters, initiate the computation, and see some results.

### 2. Add a link from one Task Flow to the next

For this flow, you want users to go from the `<PreviewPanel>` in the Explore Data Task Flow to the `<Settings>` page in the Run Computation Task Flow. The first thing you need to do is create a new button link in the `<PreviewPanel>` that links to the `<Settings>` page. Open up `PreviewPanel.tsx` and add a new link and button right next to the "View Details" button:

```jsx
<Link component={RouterLink} to="/compute/scenario/settings">
  <Button variant="contained">
    Analyze
  </Button>
</Link>
```

In the `to` prop, you will notice that we are linking to the route of the settings page. Now, clicking this button will take us directly to that step.

Note that you can change the route structure in `routes.tsx`. If you want the settings page to exist under the same `/explore` route as the Explore Data page, then you can nest that page as a new subroute of `/explore`.