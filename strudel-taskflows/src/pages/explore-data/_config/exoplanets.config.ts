import { ExploreDataConfig } from "./taskflow.types";

export const taskflow: ExploreDataConfig = {
  data: {
    items: {
      /**
       * Source of the data for the initial list of items on the main page.
       */
      source: "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI",
      /**
       * Name of the field in the data that represents a unique identifier for each record.
       */
      idField: "kepoi_name",
      /**
       * Method by which data should be filtered, either client or server.
       */
      queryMode: "client",
      staticParams: {
        table: 'cumulative',
        format: 'json'
      }
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
          field: "kepid",
          headerName: "Kepler ID",
          width: 200
        },
        {
          field: "kepoi_name",
          headerName: "Name",
          width: 150
        },
        {
          field: "koi_disposition",
          headerName: "koi_disposition",
          width: 150
        },
        {
          field: "koi_pdisposition",
          headerName: "koi_pdisposition",
          width: 150
        },
        {
          field: "koi_period",
          headerName: "koi_period",
          width: 150,
          type: 'number'
        }
      ],
      /**
       * List of filters to display on the main page and use to filter the main table data. 
       * Each filter has a definition object to determine how it renders and functions.
       */
      tableFilters: [
        {
          field: "koi_disposition",
          label: "Disposition",
          operator: "contains-one-of",
          filterComponent: "CheckboxList",
          filterProps: {
            options: [
              {
                label: "CONFIRMED",
                value: "CONFIRMED"
              },
              {
                label: "FALSE POSITIVE",
                value: "FALSE POSITIVE"
              }
            ]
          }
        },
        {
          field: "koi_period",
          label: "Period",
          operator: "between-inclusive",
          filterComponent: "RangeSlider",
          filterProps: {
            min: 0,
            max: 100
          }
        },
      ]
    }
  }
}