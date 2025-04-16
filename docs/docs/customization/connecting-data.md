---
title: 'Connecting Data'
---

## Configuring Data Sources

Each Task Flow has at least one set of data that is incorporated into the flow’s UI. Each dataset that is currently populated by a data file will have a corresponding entry in the data section of that Task Flow’s `taskflow.config.ts` file. For example, the Compare Data Task Flow has one data entry called `items`. This defines data for the main table on the first page of the Task Flow.

```js title="taskflow.config.ts"
{
  ...
  data: {
    items: {
      /**
       * Source of the data for the initial list of items.
       */
      source: 'dummy-data/scenarios.json',
      /**
       * Field name for the unique ID in the data source.
       */
      idField: 'id',
    },
  },
  ...
}
```

A data entry in `taskflow.config.ts` will consist of two properties: `source` and `idField`. The `source` is a path or URL to the dataset. If the value is a path, that means the dataset is stored locally inside the app in the `public` folder. If you want to use your own data file, simply drop the file inside the `public` folder (it would be best to drop it somewhere in `public/data`). This file can be a CSV, TSV, or JSON file. If the source value is a URL, that means the dataset is accessed online or through an API. If this is the case, it’s expected that your data are returned in JSON format. Accessing data through an API that requires an API key currently requires editing the `fetchData` utility method to include the key in the fetch options. Better support for authenticated APIs may come at a later date.

## What should my data look like?

The expected shape of your data depends on where it is being used in the Task Flow. For example, if your data is populating a table, it should be a flat list of tabular data in JSON, CSV, or TSV format. If your data is populating a chart, such as in the Run Computation Task Flow, your data will need to be shaped according to the chart type and [PlotlyJS specs](https://plotly.com/javascript/reference/index/). You can see examples for each out-of-the-box data shape inside the `public/data/default` folder.

In some cases, such as in the Search Data Repositories Task Flow, it is expected out-of-the-box that your data has certain fields in it to render certain properties and their values in the UI. If the properties aren’t configurable in the `taskflow.config.ts` file, you can always change which properties are rendered in the UI by changing the values in the templates themselves. For example, the detail page of Search Data Repositories (`[id].tsx`) expects there to be a property called “citation” to render inside the top panel.

```jsx title="[id].tsx"
<Box flex={1}>
  <Typography variant="h6" component="h2" mb={1}>
    Citation
  </Typography>
  <Typography>{data.citation}</Typography>
</Box>
```

You can change the property being pulled by changing text after “`data.`”. For example, if the property was named “citation_custom” it would look like this:

```jsx title="[id].tsx"
<Box flex={1}>
  <Typography variant="h6" component="h2" mb={1}>
    Citation
  </Typography>
  <Typography>{data.citation_custom}</Typography>
</Box>
```

## Adding an additional data source

Sometimes you may want to add an additional piece of data to your Task Flow that isn’t already part of the configuration. Maybe you are adding another table or chart to the UI, or perhaps you are pulling in a dynamic title value. To do this, you will need to add a new data fetching hook to the part of the template that you want the data. For example, if you want to fetch a new set of data in the PreviewPanel of the Explore Data Task Flow, you can add a new instance of the `useDataFromSource` hook in `_components/PreviewPanel.tsx`.

```ts title="PreviewPanel.tsx"
export const PreviewPanel: React.FC<PreviewPanelProps> = ({
  previewItem,
  onClose,
}) => {
  const columns = taskflow.pages.index.tableColumns;
  const dataIdField = taskflow.data.list.idField;
  const newTableData = useDataFromSource('data/my_new_data.csv')
  ...
```

To be consistent, you could add this data source as a new entry in your `taskflow.config.ts` file and reference the data source from the config rather than a raw string.

```ts
const newTableData = useDataFromSource(taskflow.data.newTable.source);
```

In addition to the data fetching hooks included in the library, you are free to fetch data inside of any component using any method supported by JavaScript. Under the hood, these templates use the [react-query](https://tanstack.com/query/latest/docs/framework/react/overview) library and their [useQuery](https://tanstack.com/query/latest/docs/framework/react/guides/queries) hook. You may find it useful to use this library directly inside a template. Additionally, you could use the native [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get your data.
