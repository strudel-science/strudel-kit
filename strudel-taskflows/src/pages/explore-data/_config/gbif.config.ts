import { ExploreDataConfig } from "./taskflow.types";

export const taskflow: ExploreDataConfig = {
  data: {
    items: {
      /**
       * Source of the data for the initial list of items on the main page.
       */
      source: "https://api.gbif.org/v1/occurrence/search",
      /**
       * Name of the field in the data that represents a unique identifier for each record.
       */
      idField: "key"
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
          field: "scientificName",
          headerName: "Name",
          width: 200
        },
        {
          field: "decimalLatitude",
          headerName: "Latitude",
          width: 150
        },
        {
          field: "decimalLongitude",
          headerName: "Longitude",
          width: 150
        },
        {
          field: "year",
          headerName: "Year",
          width: 150
        },
        {
          field: "basisOfRecord",
          headerName: "Basis of Record",
          width: 150
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
          label: "Assembly",
          /**
           * Type of filtering operation to use.
           * Must be 'contains' | 'contains-one-of' | 'equals' | 'equals-one-of' | 'between-inclusive' | 'between-dates-inclusive'
           */
          operator: "contains-one-of",
          /**
           * The kind of filter component and function to use. 
           * Must be "CheckboxList", "Slider", or "date range".
           */
          filterComponent: "CheckboxList",
          /**
           * Extra options to pass to the filter based on the filter type.
           */
          filterProps: {
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
          label: "Data Usage Policy",
          operator: "contains-one-of",
          filterComponent: "CheckboxList",
          filterProps: {
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
          label: "Euk. BUSCO %",
          operator: "between-inclusive",
          filterComponent: "RangeSlider",
          filterProps: {
            min: 0,
            max: 100
          }
        },
        {
          field: "Emb. BUSCO %",
          label: "Emb. BUSCO %",
          operator: "between-inclusive",
          filterComponent: "RangeSlider",
          filterProps: {
            min: 0,
            max: 100
          }
        }
      ]
    }
  }
}