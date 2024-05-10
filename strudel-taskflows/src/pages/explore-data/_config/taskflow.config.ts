import { ExploreDataConfig } from "./taskflow.types";

export const taskflow: ExploreDataConfig = {
  data: {
    items: {
      /**
       * Source of the data for the initial list of items on the main page.
       */
      source: "default/explore-data/genomes.tsv",
      /**
       * Name of the field in the data that represents a unique identifier for each record.
       */
      idField: "Proteome_ID"
    }
  },
  pages: {
    index: {
      /**
       * Title to appear at the top of the main page.
       */
      title: "Explore Data App Test",
      /**
       * Text to appear underneath the title at the top of the main page.
       */
      description: "Description of this app section",
      /**
       * List of column definition objects for the columns in the table on the main page.
       */
      tableColumns: [
        {
          field: "Organism",
          headerName: "Organism",
          width: 200
        },
        {
          field: "Common Name",
          headerName: "Common Name",
          width: 200
        },
        {
          field: "Assembly",
          headerName: "Assembly",
          width: 150
        },
        {
          field: "Data Usage Policy",
          headerName: "Data Usage Policy",
          width: 220
        },
        {
          field: "Euk. BUSCO %",
          headerName: "Euk. BUSCO %",
          type: "number",
          width: 200
        },
        {
          field: "Emb. BUSCO %",
          headerName: "Emb. BUSCO %",
          type: "number",
          width: 200
        }
      ],
      /**
       * List of filters to display on the main page and use to filter the main table data. 
       * Each filter has a definition object to determine how it renders and functions.
       */
      tableFilters: [
        {
          /**
           * Exact name of the property field in the data to filter on. 
           */
          field: "Assembly",
          /**
           * Text to display in the label for the filter.
           */
          displayName: "Assembly",
          /**
           * The kind of filter component and function to use. 
           * Must be "CheckboxList", "Slider", or "date range".
           */
          filterType: "CheckboxList",
          /**
           * Extra options to pass to the filter based on the filter type.
           */
          props: {
            options: [
              {
                label: "JGI",
                value: "JGI"
              },
              {
                label: "BYU",
                value: "BYU"
              },
              {
                label: "AGP",
                value: "AGP"
              }
            ]
          }
        },
        {
          field: "Data Usage Policy",
          displayName: "Data Usage Policy",
          filterType: "CheckboxList",
          props: {
            options: [
              {
                label: "restricted",
                value: "restricted"
              },
              {
                label: "unrestricted",
                value: "unrestricted"
              }
            ]
          }
        },
        {
          field: "Euk. BUSCO %",
          displayName: "Euk. BUSCO %",
          filterType: "Slider",
          props: {
            min: 0,
            max: 100
          }
        },
        {
          field: "Emb. BUSCO %",
          displayName: "Emb. BUSCO %",
          filterType: "Slider",
          props: {
            min: 0,
            max: 100
          }
        }
      ]
    }
  }
}