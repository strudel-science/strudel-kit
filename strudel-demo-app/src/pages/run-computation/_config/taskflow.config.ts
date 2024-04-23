import { RunComputationConfig } from "./taskflow.types";

export const taskflow: RunComputationConfig = {
  properties: {
    itemName: "scenario",
    itemNamePlural: "scenarios",
  },
  data: {
    items: {
      source: "default/run-computation/list.json",
      idField: "id"
    },
    inputs: {
      source: "default/run-computation/inputs.json",
      idField: ""
    },
    lineChart: {
      source: "default/run-computation/results_line_chart.json"
    },
    barChart: {
      source: "default/run-computation/results_bar_chart.json"
    },
    results: {
      source: "default/run-computation/results_table.json",
      idField: "id"
    }
  },
  pages: {
    index: {
      title: "Scenario List",
      description: "Scenarios represent a set of analysis inputs / parameters / settings and the results of that analysis.",
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
      title: "Data Inputs",
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
      title: "Optimization Settings"
    },
    results: {
      title: "Results",
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