import { ContributeDataConfig } from "./taskflow.types";

export const taskflow: ContributeDataConfig = {
  data: {
    datasets: {
      /**
       * Source of the data for the initial list of datasets on the portal page. 
       */
      source: "default/contribute-data/contributor_datasets.json",
      /**
       * Name of the field in the data that represents a unique identifier for each record. 
       */
      idField: "id"
    }
  },
  pages: {
    index: {
      /**
       * Title to appear at the top of the register page.
       */
      title: "Register as a data contributor"
    },
    portal: {
      /**
       * Title to appear at the top of the portal page.
       */
      title: "Your Dataset Uploads",
      /**
       * List of column definition objects for the columns in the table on the portal page.
       */
      tableColumns: [
        {
          field: "title",
          headerName: "Dataset Title",
          width: 200
        },
        {
          field: "category",
          headerName: "Category",
          width: 200
        },
        {
          field: "summary",
          headerName: "Summary",
          width: 200
        },
        {
          field: "doi",
          headerName: "DOI",
          width: 200
        },
        {
          field: "publication_date",
          headerName: "Created Date",
          width: 200
        },
        {
          field: "status",
          headerName: "Status",
          width: 200
        }
      ]
    },
    new: {
      /**
       * Title to appear at the top of the new dataset page.
       */
      title: "Upload a new dataset",
      /**
       * Text to appear underneath the title at the top of the new dataset page.
       */
      description: "Description of this app section"
    },
    review: {
      /**
       * Title to appear at the top of the review page.
       */
      title: "Review your new dataset"
    }
  }
}