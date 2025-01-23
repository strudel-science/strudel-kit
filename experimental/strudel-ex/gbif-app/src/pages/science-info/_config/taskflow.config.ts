import { ExploreDataConfig } from "./taskflow.types";

export const taskflow: ExploreDataConfig = {
  data: {
    items: {
      /**
       * Source of the data for the initial list of items on the main page.
       */
      source: "https://api.gbif.org/v1/occurrence/search?",
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
      title: "Solar System Explorer",
      /**
       * Text to appear underneath the title at the top of the main page.
       */
      description: "Explore data about the planets that orbit the Sun.",
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
          field: "Diameter",
          displayName: "Diameter (km)",
          filterType: "Slider",
          props: {
            min: 4000,
            max: 150000
          }
        }
      ]
    }
  }
}