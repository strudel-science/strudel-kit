---
title: 'Columns'
---

Columns can be defined in an array that follows the [MUI column definition syntax](https://mui.com/x/react-data-grid/column-definition/).

```ts
const columns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'Dataset Title',
    width: 200,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 200,
  },
  {
    field: 'summary',
    headerName: 'Summary',
    width: 200,
  },
  {
    field: 'doi',
    headerName: 'DOI',
    width: 200,
  },
];
```

For the Compare Data Task Flow, there is also an additional column, `isComparisonMetric` which is used to denote which columns should be displayed on the comparison page.

```ts
// CUSTOMIZE: the columns for the main data table
const columns = [
  {
    field: 'name',
    headerName: 'Scenario Name',
    width: 200,
  },
  {
    field: 'acetic_acid_concentration',
    headerName: 'Acetic Acid Concentration',
    width: 200,
    isComparisonMetric: true,
  },
];
```
