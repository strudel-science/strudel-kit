import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as n}from"./index-CdBz_BW3.js";import{M as r}from"./blocks-BcgF5v40.js";import"./iframe-Je2dcYBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9Dg0B64.js";import"./index-lRMvVXJi.js";import"./index-Dn6zoxiH.js";function o(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Customization/Connecting Data"}),`
`,e.jsx(t.h1,{id:"connecting-data",children:"Connecting Data"}),`
`,e.jsx(t.h2,{id:"configuring-data-sources",children:"Configuring Data Sources"}),`
`,e.jsx(t.p,{children:"Each Task Flow has at least one set of data that is incorporated into the flow’s UI. These data sources are pulled in through custom React hooks that fetch data from external files. For example, here is how a data source is pulled in for the Monitor Activities Task Flow:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const experiments = useDataFromSource('dummy-data/experiments.json');
`})}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"useDataFromSource"})," hook fetches data from an external JSON, CSV, or TSV file. If supplied a local path (instead of a full URL), this hook will look for data in the ",e.jsx(t.code,{children:"public/"})," directory. If you want to add your own data file, you can drop it in the ",e.jsx(t.code,{children:"public/data/"})," folder and change the source in the hook:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const experiments = useDataFromSource('data/my_data.json');
`})}),`
`,e.jsx(t.p,{children:"If the source value is a URL, that means the dataset is accessed online or through an API."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const experiments = useDataFromSource(
  'https://pokeapi.co/api/v2/pokemon-species/'
);
`})}),`
`,e.jsxs(t.p,{children:["If this is the case, it’s expected that your data are returned in JSON format. Accessing data through an API that requires an API key currently requires editing the ",e.jsx(t.code,{children:"fetchData"})," utility method to include the key in the fetch options. Better support for authenticated APIs may come at a later date."]}),`
`,e.jsx(t.h2,{id:"what-should-my-data-look-like",children:"What should my data look like?"}),`
`,e.jsxs(t.p,{children:["The expected shape of your data depends on where it is being used in the Task Flow. For example, if your data is populating a table, it should be a flat list of tabular data in JSON, CSV, or TSV format. If your data is populating a chart, such as in the Run Computation Task Flow, your data will need to be shaped according to the chart type and ",e.jsx(t.a,{href:"https://plotly.com/javascript/reference/index/",rel:"nofollow",children:"PlotlyJS specs"}),". You can see examples for each out-of-the-box data shape inside the ",e.jsx(t.code,{children:"public/dummy-data"})," folder."]}),`
`,e.jsxs(t.p,{children:["In some cases, such as in the Search Data Repositories Task Flow, it is expected out-of-the-box that your data has certain fields in it to render certain properties and their values in the UI. You can change which properties are rendered in the UI by changing the values in the templates themselves. For example, the detail page of Search Data Repositories (",e.jsx(t.code,{children:"search-data-repositories/$id.tsx"}),") expects there to be a property called “citation” to render inside the top panel."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<Box flex={1}>
  <Typography variant="h6" component="h2" mb={1}>
    Citation
  </Typography>
  <Typography>{data.citation}</Typography>
</Box>
`})}),`
`,e.jsxs(t.p,{children:["You can change the property being pulled by changing text after “",e.jsx(t.code,{children:"data."}),"”. For example, if the property was named “citation_custom” it would look like this:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<Box flex={1}>
  <Typography variant="h6" component="h2" mb={1}>
    Citation
  </Typography>
  <Typography>{data.citation_custom}</Typography>
</Box>
`})}),`
`,e.jsx(t.h2,{id:"adding-an-additional-data-source",children:"Adding an additional data source"}),`
`,e.jsxs(t.p,{children:["Sometimes you may want to add an additional piece of data to your Task Flow that isn’t already part of the configuration. Maybe you are adding another table or chart to the UI, or perhaps you are pulling in a dynamic title value. To do this, you will need to add a new data fetching hook to the part of the template that you want the data. For example, if you want to fetch a new set of data in the PreviewPanel of the Explore Data Task Flow, you can add a new instance of the ",e.jsx(t.code,{children:"useDataFromSource"})," hook in ",e.jsx(t.code,{children:"-components/PreviewPanel.tsx"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export const PreviewPanel: React.FC<PreviewPanelProps> = ({
  previewItem,
  onClose,
}) => {
  const newTableData = useDataFromSource('data/my_new_data.csv')
  ...
`})}),`
`,e.jsxs(t.p,{children:["In addition to the data fetching hooks included in the library, you are free to fetch data inside of any component using any method supported by JavaScript. Under the hood, these templates use the ",e.jsx(t.a,{href:"https://tanstack.com/query/latest/docs/framework/react/overview",rel:"nofollow",children:"react-query"})," library and their ",e.jsx(t.a,{href:"https://tanstack.com/query/latest/docs/framework/react/guides/queries",rel:"nofollow",children:"useQuery"})," hook. You may find it useful to use this library directly inside a template. Additionally, you could use the native ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",rel:"nofollow",children:"fetch API"})," to get your data."]})]})}function m(a={}){const{wrapper:t}={...n(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(o,{...a})}):o(a)}export{m as default};
