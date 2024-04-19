import { CompareDataConfig } from "./taskflow.types";

export const config: CompareDataConfig = {
  properties: {
    itemName: "orb",
    itemNamePlural: "orbs",
  },
  data: {
    list: {
      source: "default/compare-data/scenarios.json",
      idField: "id"
    }
  },
  pages: {
    index: {
      title: "Compare Data App with New Config",
      description: "Description of this app section test",
      tableColumns: [
        {
          field: "name",
          headerName: "Scenario Name",
          width: 200
        },
        {
          field: "description",
          headerName: "Description",
          width: 200
        },
        {
          field: "analysis_type",
          headerName: "Analysis Type",
          width: 200
        },
        {
          field: "volumetric_flow_rate",
          headerName: "Volumetric Flow Rate",
          width: 200,
          isComparisonMetric: true
        },
        {
          field: "tss_concentration",
          headerName: "TSS Concentration",
          width: 200,
          isComparisonMetric: true
        },
        {
          field: "cod_concentration",
          headerName: "COD Concentration",
          width: 200,
          isComparisonMetric: true
        },
        {
          field: "tkn_concentration",
          headerName: "TKN Concentration",
          width: 200,
          isComparisonMetric: true
        },
        {
          field: "acetic_acid_concentration",
          headerName: "Acetic Acid Concentration",
          width: 200,
          isComparisonMetric: true
        },
        {
          field: "metric6",
          headerName: "metric6",
          width: 200,
          isComparisonMetric: true
        },
        {
          field: "metric7",
          headerName: "metric7",
          width: 200,
          isComparisonMetric: true
        },
        {
          field: "metric8",
          headerName: "metric8",
          width: 200,
          isComparisonMetric: true
        },
        {
          field: "metric9",
          headerName: "metric9",
          width: 200,
          isComparisonMetric: true
        },
        {
          field: "metric10",
          headerName: "metric10",
          width: 200,
          isComparisonMetric: true
        }
      ]
    },
    new: {
      title: "New Scenario Test",
      description: "Description of this app section new"
    },
    compare: {
      title: "Compare Scenarios Test",
      description: "Description of this app section compare"
    }
  }
}