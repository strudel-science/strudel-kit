import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-CdBz_BW3.js";import{M as i}from"./blocks-BcgF5v40.js";import"./iframe-Je2dcYBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9Dg0B64.js";import"./index-lRMvVXJi.js";import"./index-Dn6zoxiH.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Customization/Combining Sections"}),`
`,e.jsx(n.h1,{id:"combining-sections",children:"Combining Sections"}),`
`,e.jsx(n.h2,{id:"how-to-combine-sections-from-different-task-flows",children:"How to Combine Sections from Different Task Flows"}),`
`,e.jsx(n.p,{children:"When using STRUDEL Kit it's common to want to take a section from one Task Flow and copy it into a different one. Doing so requires you to copy the desired components and elements from one Task Flow file into another file in the desired destination. The number of steps involved depends on the particular components but this guide will show you a simple use-case to get you started."}),`
`,e.jsx(n.p,{children:"In this example, you will copy the charts and table from the Results page in the Run Computation Task Flow into the Comparison page of the Compare Data Task Flow."}),`
`,e.jsx(n.h3,{id:"1-add-both-task-flows-to-your-app",children:"1. Add both Task Flows to your app"}),`
`,e.jsx(n.p,{children:"If you haven't already, add both the Run Computation and Compare Data Task Flows into your app:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`cd src/pages
npx degit strudel-science/strudel-kit/src/pages/run-computation first-taskflow
npx degit strudel-science/strudel-kit/src/pages/compare-data second-taskflow
`})}),`
`,e.jsx(n.h3,{id:"2-locate-the-file-with-the-desired-components",children:"2. Locate the file with the desired components"}),`
`,e.jsxs(n.p,{children:["The table and charts live in ",e.jsx(n.code,{children:"_layout/$id/_layout/results.tsx"})," inside the Task Flow folder that uses the Run Computation template. In this example that directory would be named ",e.jsx(n.code,{children:"first-taskflow"}),"."]}),`
`,e.jsx(n.h3,{id:"3-copy-the-components",children:"3. Copy the components"}),`
`,e.jsxs(n.p,{children:["Scan the components and elements in the final ",e.jsx(n.code,{children:"return"})," statement for the component. There you will find a ",e.jsx(n.code,{children:"<Grid>"})," component that contains two ",e.jsx(n.code,{children:"<Plot>"})," components and one ",e.jsx(n.code,{children:"<DataGrid>"})," component. Copy the whole ",e.jsx(n.code,{children:"<Grid>"})," component from ",e.jsx(n.code,{children:"<Grid>"})," to ",e.jsx(n.code,{children:"</Grid>"}),". Make sure to always include the closing section of components when you copy them. This will look like ",e.jsx(n.code,{children:"</Component>"})," for component that have inner children and ",e.jsx(n.code,{children:"/>"})," for components that don't."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Grid container spacing={4}>
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
`})}),`
`,e.jsx(n.h3,{id:"4-locate-the-destination-file",children:"4. Locate the destination file"}),`
`,e.jsxs(n.p,{children:["The comparison page of the Compare Data Task Flow lives in ",e.jsx(n.code,{children:"_layout/compare.tsx"}),". In this example its parent directory would be named ",e.jsx(n.code,{children:"second-taskflow"}),". Open this file. This is where we want to paste our new components."]}),`
`,e.jsx(n.h3,{id:"5-paste-the-components",children:"5. Paste the components"}),`
`,e.jsxs(n.p,{children:["Let's say you want to put these new components underneath the comparison data table but you want them to fill the same width (i.e. you want them to be in the same container). You will find the ",e.jsx(n.code,{children:"<DataGrid>"})," component towards the bottom of the file. Paste the new components directly underneath the ",e.jsx(n.code,{children:"<Paper>"})," component that wraps around the ",e.jsx(n.code,{children:"<DataGrid>"})," but keep them inside of the ",e.jsx(n.code,{children:"<Container>"})," component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Container
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
`})}),`
`,e.jsxs(n.p,{children:["Let's also make a small change to the top-most ",e.jsx(n.code,{children:"<Grid>"})," component by adding some margin to the top:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Grid container spacing={4} marginTop={1}>
`})}),`
`,e.jsx(n.h3,{id:"6-update-the-imports",children:"6. Update the imports"}),`
`,e.jsxs(n.p,{children:["Because we added new components to the ",e.jsx(n.code,{children:"compare.tsx"})," file, we need to import the ones that aren't already imported:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
} from '@mui/material';
import Plot from 'react-plotly.js';
`})}),`
`,e.jsx(n.p,{children:"Almost there. Now we just need to add source data to the new table, line chart, and bar chart."}),`
`,e.jsx(n.h3,{id:"7-connect-new-data-sources",children:"7. Connect new data sources"}),`
`,e.jsxs(n.p,{children:["In a real app, the data for these components would likely come from an API or external file but in this example we are going to place the data directly in the component. See the ",e.jsx(n.a,{href:"https://strudel.science/strudel-kit/docs/guides/connecting-data",rel:"nofollow",children:"Connecting Data"})," guide for more information about connecting data sources."]}),`
`,e.jsx(n.p,{children:"Here is the line chart component with some example data plugged in:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<Plot
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
`})}),`
`,e.jsx(n.p,{children:"And here is bar chart component with some example data plugged in:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<Plot
  data={[
    {
      x: ['Tulip', 'Orchid', 'Sunflower'],
      y: [20, 14, 23],
      type: 'bar',
    },
  ]}
  layout={{}}
/>
`})}),`
`,e.jsxs(n.p,{children:["And finally, populate the ",e.jsx(n.code,{children:"rows"})," prop and the ",e.jsx(n.code,{children:"columns"})," prop of the ",e.jsx(n.code,{children:"<DataGrid>"})," component with some example values like below:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<DataGrid
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
`})})]})}function u(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};
