# Run Computation Config File

Configuration file to pass to the `add-taskflow` command for the Run Computation Task Flow. Specifications in the config file can be overriden by options supplied on the command line.

```
strudel add-taskflow -c config.json
```

```
{
  "name": "my-taskflow",
  "template": "run-computation",
  "computeItem": "scenario",
  "computeItemPlural": "scenarios",
  "pages": {
    "list": {
      "pageTitle": "Scenario List",
      "pageDescription": "Scenarios represent a set of analysis inputs / parameters / settings and the results of that analysis."
    },
    "inputs": {
      "pageTitle": "Data Inputs"
    },
    "settings": {
      "pageTitle": "Optimization Settings"
    },
    "results": {
      "pageTitle": "Results"
    }
  },
  "data": {
    "list": {
      "table": {
        "dataSource": "default/run-computation/list.json",
        "dataIdField": "id"
      }
    },
    "inputs": {
      "table": {
        "dataSource": "default/run-computation/inputs.json",
        "dataIdField": ""
      }
    },
    "results": {
      "table": {
        "dataSource": "default/run-computation/results_table.json",
        "dataIdField": "id"
      },
      "lineChart": {
        "dataSource": "default/run-computation/results_line_chart.json"
      },
      "barChart": {
        "dataSource": "default/run-computation/results_bar_chart.json"
      },
    }
  },
  "definitions": {
    "list": {
      "table": {
        "columns": [
          { 
            "field": "name", 
            "headerName": "Scenario Name", 
            "width": 200 
          },
          { 
            "field": "analysisType", 
            "headerName": "Analysis Type", 
            "width": 200 
          },
          { 
            "field": "createdDate", 
            "headerName": "Date Created", 
            "width": 200 
          },
          { 
            "field": "status", 
            "headerName": "Status", 
            "width": 200 
          }
        ]
      }
    },
    "inputs": {
      "table": {
        "columns": [
          { 
            "field": "name", 
            "headerName": "Unit Name", 
            "width": 200 
          },
          { 
            "field": "unitType", 
            "headerName": "Unit Type", 
            "width": 200 
          },
          { 
            "field": "constraints", 
            "headerName": "Constraints", 
            "width": 200
          },
          { 
            "field": "lowerBound", 
            "headerName": "Lower Bound", 
            "width": 200,
            "type": "number"
          },
          { 
            "field": "upperBound", 
            "headerName": "Upper Bound", 
            "width": 200,
            "type": "number"
          }
        ]
      }
    },
    "results": {
      "table": {
        "columns": [
          { 
            "field": "name", 
            "headerName": "Unit Name", 
            "width": 200 
          },
          { 
            "field": "unitType", 
            "headerName": "Unit Type", 
            "width": 200 
          },
          { 
            "field": "constraints", 
            "headerName": "Constraints", 
            "width": 200
          },
          { 
            "field": "lowerBound", 
            "headerName": "Lower Bound", 
            "width": 200,
            "type": "number"
          },
          { 
            "field": "upperBound", 
            "headerName": "Upper Bound", 
            "width": 200,
            "type": "number"
          }
        ]
      }
    }
  }
}
```

#### `name`

The name of the Task Flow directory to generate.

#### `template`

The name of the Task Flow template to use. Determines which Task Flow config will be compatible and which template files to add to the app. Can be overridden by the `--template` option.

#### `computeItem`

Word (in singular form) to use in the UI for the distinct computation runs. For example, if each run should be called a "scenario", this value should be `"scenario"`.

#### `computeItemPlural`

Pluralized version of `compareItem`. This is used in the UI when `compareItem` needs to be plural. For example, if each run should be called a "scenario", this value should be `"scenarios"`.

#### `pages.list.pageTitle`

Title to appear at the top of the initial items list page.

#### `pages.list.pageDescription`

Text to appear underneath the title at the top of the initial items list page.

#### `pages.inputs.pageTitle`

Title to appear at the top of the inputs page and in the breadcrumbs.

#### `pages.settings.pageTitle`

Title to appear at the top of the settings page and in the breadcrumbs.

#### `pages.results.pageTitle`

Title to appear at the top of the results page and in the breadcrumbs.

#### `data.list.table.dataSource`

Source of the data for the initial list of items. Value can be a path to a JSON, CSV, or TSV file inside of the `public/data` directory or a URL to an API that returns an array of JSON items.

#### `data.list.table.dataIdField`

Name of the field in the data that represents a unique identifier for each record in the list page table. For example, `"id"`.

#### `data.inputs.table.dataSource`

Source of the data for the table on the inputs page. Value can be a path to a JSON, CSV, or TSV file inside of the `public/data` directory or a URL to an API that returns an array of JSON items.

#### `data.list.table.dataIdField`

Name of the field in the data that represents a unique identifier for each record in the inputs page table. For example, `"id"`.

#### `data.results.table.dataSource`

Source of the data for the table on the results page. Value can be a path to a JSON, CSV, or TSV file inside of the `public/data` directory or a URL to an API that returns an array of JSON items.

#### `data.list.table.dataIdField`

Name of the field in the data that represents a unique identifier for each record in the results page table. For example, `"id"`.

#### `data.results.lineChart.dataSource`

Source of the data for the line chart on the results page. Value can be a path to a JSON, CSV, or TSV file inside of the `public/data` directory or a URL to an API that returns an array of JSON items. The return format must be compatible with Plotly's data attribue. See the [Plotly Figure Reference](https://plotly.com/javascript/reference/index/) for more details.

#### `data.results.barChart.dataSource`

Source of the data for the bar chart on the results page. Value can be a path to a JSON, CSV, or TSV file inside of the `public/data` directory or a URL to an API that returns an array of JSON items. The return format must be compatible with Plotly's data attribue. See the [Plotly Figure Reference](https://plotly.com/javascript/reference/index/) for more details.

#### `definitions.columns.list.table`

List of column definition objects for the columns in the table on the list page. See the [MUI GridColDef docs](https://mui.com/x/api/data-grid/grid-col-def/) for more information about column options.

#### `definitions.columns.inputs.table`

List of column definition objects for the columns in the table on the inputs page. See the [MUI GridColDef docs](https://mui.com/x/api/data-grid/grid-col-def/) for more information about column options.

#### `definitions.columns.results.table`

List of column definition objects for the columns in the table on the results page. See the [MUI GridColDef docs](https://mui.com/x/api/data-grid/grid-col-def/) for more information about column options.
