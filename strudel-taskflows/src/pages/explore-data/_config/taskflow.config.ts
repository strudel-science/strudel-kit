import { ExploreDataConfig } from "./taskflow.types";

export const taskflow: ExploreDataConfig = {
  data: {
    /**
     * Data definition for the initial items list
     */
    list: {
      /**
       * URL or path to the data source
       */
      source: "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI",
      /**
       * Key-value object of params that should always be included in the query URL
       */
      staticParams: {
        table: 'cumulative',
        format: 'json'
      },
      /**
       * Name of the field in the data that represents a unique identifier for each record.
       */
      idField: "kepoi_name",
      /**
       * Method by which data should be filtered, either client or server.
       */
      queryMode: "client",
    },
    /**
     * Data definition for the item detail page
     */
    detail: {
      source: "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI",
      staticParams: {
        table: 'cumulative',
        format: 'json'
      },
      idField: "kepoi_name",
      queryMode: "client",
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
          headerName: "Kepler OI Name",
          width: 150
        },
        {
          field: "kepler_name",
          headerName: "Kepler Name",
          width: 150
        },
        {
          field: "koi_disposition",
          headerName: "Disposition",
          width: 150
        },
        {
          field: "koi_period",
          headerName: "Period",
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