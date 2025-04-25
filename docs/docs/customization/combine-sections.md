---
title: 'Combining Sections'
---

## How to Combine Sections from Different Task Flows

When using STRUDEL Kit it's common to want to take a section from one Task Flow and copy it into a different one. Doing so requires you to copy the desired components and elements from one Task Flow file into another file in the desired destination. The number of steps involved depends on the particular components but this guide will show you a simple use-case to get you started.

In this example, you will copy the charts and table from the Results page in the Run Computation Task Flow into the Comparison page of the Compare Data Task Flow.

### 1. Add both Task Flows to your app

If you haven't already, add both the Run Computation and Compare Data Task Flows into your app:

```
cd src/pages
npx degit strudel-science/strudel-kit/src/pages/run-computation first-taskflow
npx degit strudel-science/strudel-kit/src/pages/compare-data second-taskflow
```

### 2. Locate the file with the desired components

The table and charts live in `_layout/$id/_layout/results.tsx` inside the Task Flow folder that uses the Run Computation template. In this example that directory would be named `first-taskflow`.

### 3. Copy the components

Scan the components and elements in the final `return` statement for the component. There you will find a `<Grid>` component that contains two `<Plot>` components and one `<DataGrid>` component. Copy the whole `<Grid>` component from `<Grid>` to `</Grid>`. Make sure to always include the closing section of components when you copy them. This will look like `</Component>` for component that have inner children and `/>` for components that don't.

```jsx title="results.tsx"
<Grid container spacing={4}>
  <Grid item sm={6}>
    <Paper>
      <Plot data={state.results.lineChart.data} layout={{}} />
    </Paper>
  </Grid>
  <Grid item sm={6}>
    <Paper>
      <Plot data={state.results.barChart.data} layout={{}} />
    </Paper>
  </Grid>
  <Grid item xs={12}>
    <Paper>
      <DataGrid
        rows={state.results.table.data}
        getRowId={(row) => row[state.results.table.dataIdField]}
        columns={state.results.table.columns}
        disableColumnSelector
        disableRowSelectionOnClick
      />
    </Paper>
  </Grid>
</Grid>
```

### 4. Locate the destination file

The comparison page of the Compare Data Task Flow lives in `_layout/compare.tsx`. In this example its parent directory would be named `second-taskflow`. Open this file. This is where we want to paste our new components.

### 5. Paste the components

Let's say you want to put these new components underneath the comparison data table but you want them to fill the same width (i.e. you want them to be in the same container). You will find the `<DataGrid>` component towards the bottom of the file. Paste the new components directly underneath the `<Paper>` component that wraps around the `<DataGrid>` but keep them inside of the `<Container>` component:

```jsx title="compare.tsx"
<Container
  maxWidth="xl"
  sx={{
    marginTop: 3,
    marginBottom: 3,
  }}
>
  <Paper
    sx={{
      '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: '1px solid',
        borderRightColor: 'neutral.main',
      },
      '& .compare-data--metric': {
        fontWeight: 'bold',
      },
    }}
  >
    {state.comparing && (
      <DataGrid
        rows={state.comparisonData}
        getRowId={(row) => row.metric}
        columns={state.comparisonColumns}
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnFilter
      />
    )}
  </Paper>
  <Grid container spacing={4}>
    <Grid item sm={6}>
      <Paper>
        <Plot data={state.results.lineChart.data} layout={{}} />
      </Paper>
    </Grid>
    <Grid item sm={6}>
      <Paper>
        <Plot data={state.results.barChart.data} layout={{}} />
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper>
        <DataGrid
          rows={state.results.table.data}
          getRowId={(row) => row[state.results.table.dataIdField]}
          columns={state.results.table.columns}
          disableColumnSelector
          disableRowSelectionOnClick
        />
      </Paper>
    </Grid>
  </Grid>
</Container>
```

Let's also make a small change to the top-most `<Grid>` component by adding some margin to the top:

```jsx title="compare.tsx"
<Grid container spacing={4} marginTop={1}>
```

### 6. Update the imports

Because we added new components to the `compare.tsx` file, we need to import the ones that aren't already imported:

```js title="compare.tsx"
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
} from '@mui/material';
import Plot from 'react-plotly.js';
```

Almost there. Now we just need to add source data to the new table, line chart, and bar chart.

### 7. Connect new data sources

In a real app, the data for these components would likely come from an API or external file but in this example we are going to place the data directly in the component. See the [Connecting Data](https://strudel.science/strudel-kit/docs/guides/connecting-data) guide for more information about connecting data sources.

Here is the line chart component with some example data plugged in:

```js title="compare.tsx"
<Plot
  data={[
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
    },
    {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: 'scatter',
    },
    {
      x: [1, 2, 3, 4],
      y: [21, 17, 4, 10],
      type: 'scatter',
    },
  ]}
  layout={{}}
/>
```

And here is bar chart component with some example data plugged in:

```js title="compare.tsx"
<Plot
  data={[
    {
      x: ['Tulip', 'Orchid', 'Sunflower'],
      y: [20, 14, 23],
      type: 'bar',
    },
  ]}
  layout={{}}
/>
```

And finally, populate the `rows` prop and the `columns` prop of the `<DataGrid>` component with some example values like below:

```js title="compare.tsx"
<DataGrid
  rows={[
    {
      sample_id: 0,
      type: 'tulip',
      latitude: 37.8715,
      longitude: -122.2727,
      'elevation (m)': 52,
      notes: 'healthy growth',
    },
    {
      sample_id: 1,
      type: 'tulip',
      latitude: 38.2341,
      longitude: -121.4875,
      'elevation (m)': 52,
      notes: 'healthy growth',
    },
    {
      sample_id: 2,
      type: 'sunflower',
      latitude: 37.2338,
      longitude: -121.4899,
      'elevation (m)': 52,
      notes: 'unhealthy coloration',
    },
    {
      sample_id: 3,
      type: 'orchid',
      latitude: 37.8758,
      longitude: -122.2732,
      'elevation (m)': 52,
      notes: 'healthy growth',
    },
    {
      sample_id: 4,
      type: 'orchid',
      latitude: 37.8715,
      longitude: -122.2727,
      'elevation (m)': 52,
      notes: 'fungal infection',
    },
  ]}
  getRowId={(row) => row['sample_id']}
  columns={[
    {
      field: 'sample_id',
    },
    {
      field: 'type',
    },
    {
      field: 'latitude',
      type: 'number',
    },
    {
      field: 'longitude',
      type: 'number',
    },
    {
      field: 'elevation (m)',
      type: 'number',
    },
    {
      field: 'notes',
    },
  ]}
  disableColumnSelector
  disableRowSelectionOnClick
/>
```
