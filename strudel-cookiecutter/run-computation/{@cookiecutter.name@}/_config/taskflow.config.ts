import { RunComputationConfig } from "./taskflow.types";

export const taskflow: RunComputationConfig = {
  properties: {
    /**
     * Word (in singular form) to use in the UI for the distinct computation runs. 
     * For example, if each run should be called a "scenario", this value should be `"scenario"`
     */
    itemName: "scenario",
    /**
     * Pluralized version of `compareItem`. This is used in the UI when `compareItem` needs to be plural. 
     * For example, if each run should be called a "scenario", this value should be `"scenarios"`.
     */
    itemNamePlural: "scenarios",
  },
  data: {
    items: {
      /**
       * Source of the data for the initial list of items.
       */
      source: "default/run-computation/list.json",
      /**
       * Field name for the unique ID in the data source.
       */
      idField: "id"
    },
    inputs: {
      /**
       * Source of the data for the table on the inputs page.
       */
      source: "default/run-computation/inputs.json",
      /**
       * Field name for the unique ID in the data source.
       */
      idField: "id"
    },
    lineChart: {
      /**
       * Source of the data for the line chart on the results page.
       * The return format must be compatible with Plotly's data attribue. 
       * See the [Plotly Figure Reference](https://plotly.com/javascript/reference/index/) for more details.
       */
      source: "default/run-computation/results_line_chart.json"
    },
    barChart: {
      /**
       * Source of the data for the bar chart on the results page.
       * The return format must be compatible with Plotly's data attribue. 
       * See the [Plotly Figure Reference](https://plotly.com/javascript/reference/index/) for more details.
       */
      source: "default/run-computation/results_bar_chart.json"
    },
    results: {
      /**
       * Source of the data for the table on the results page.
       */
      source: "default/run-computation/results_table.json",
      /**
       * Field name for the unique ID in the data source.
       */
      idField: "id"
    }
  },
  pages: {
    index: {
      /**
       * Title to appear at the top of the initial items list page.
       */
      title: "Scenario List",
      /**
       * Text to appear underneath the title at the top of the initial items list page.
       */
      description: "Scenarios represent a set of analysis inputs / parameters / settings and the results of that analysis.",
      /**
       * List of column definition objects for the columns in the table on the list page.
       */
      tableColumns: [
        {
          field: "name",
          headerName: "Scenario Name",
          width: 200
        },
        {
          field: "analysisType",
          headerName: "Analysis Type",
          width: 200
        },
        {
          field: "createdDate",
          headerName: "Date Created",
          width: 200
        },
        {
          field: "status",
          headerName: "Status",
          width: 200
        }
      ]
    },
    dataInputs: {
      /**
       * Title to appear at the top of the inputs page and in the breadcrumbs.
       */
      title: "Data Inputs",
      /**
       * List of column definition objects for the columns in the table on the inputs page.
       */
      tableColumns: [
        {
          field: "name",
          headerName: "Unit Name",
          width: 200
        },
        {
          field: "unitType",
          headerName: "Unit Type",
          width: 200
        },
        {
          field: "constraints",
          headerName: "Constraints",
          width: 200
        },
        {
          field: "lowerBound",
          headerName: "Lower Bound",
          width: 200,
          type: "number"
        },
        {
          field: "upperBound",
          headerName: "Upper Bound",
          width: 200,
          type: "number"
        }
      ]
    },
    settings: {
      /**
       * Title to appear at the top of the settings page and in the breadcrumbs.
       */
      title: "Optimization Settings"
    },
    results: {
      /**
       * Title to appear at the top of the results page and in the breadcrumbs.
       */
      title: "Results",
      /**
       * List of column definition objects for the columns in the table on the results page.
       */
      tableColumns: [
        {
          field: "name",
          headerName: "Unit Name",
          width: 200
        },
        {
          field: "unitType",
          headerName: "Unit Type",
          width: 200
        },
        {
          field: "constraints",
          headerName: "Constraints",
          width: 200
        },
        {
          field: "lowerBound",
          headerName: "Lower Bound",
          width: 200,
          type: "number"
        },
        {
          field: "upperBound",
          headerName: "Upper Bound",
          width: 200,
          type: "number"
        }
      ]
    }
  }
}