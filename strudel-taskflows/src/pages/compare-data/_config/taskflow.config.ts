import { CompareDataConfig } from "./taskflow.types";

export const taskflow: CompareDataConfig = {
  properties: {
    /**
     * Word (in singular form) to use in the UI for the item being compared. 
     * For example, if the app is comparing plants, this value should be "plant".
     */
    itemName: "scenario",
    /**
     * Pluralized version of itemName. This is used in the UI when itemName needs to be plural. 
     * For example, if the app is comparing plants, this value should be "plants".
     */
    itemNamePlural: "scenarios",
  },
  data: {
    items: {
      /**
       * Source of the data for the initial list of items. 
       */
      source: "default/compare-data/scenarios.json",
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
      title: "Compare Data App",
      /**
       * Text to appear underneath the title at the top of the initial items list page.
       */
      description: "Description of this app section",
      /**
       * Column definitions for the table on the initial page.
       * See all options from MUI's DataGrid: https://mui.com/x/api/data-grid/grid-col-def/
       */
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
        }
      ]
    },
    new: {
      /**
       * Title to appear at the top of the new item page.
       */
      title: "New Scenario",
      /**
       * Text to appear underneath the title at the top of the new item page.
       */
      description: "Description of this app section"
    },
    compare: {
      /**
       * Title to appear at the top of the comparison page.
       */
      title: "Compare Scenarios",
      /**
       * Text to appear underneath the title at the top of the comparison page.
       */
      description: "Description of this app section"
    }
  }
}