import { ContributeDataConfig } from "./taskflow.types";

export const taskflow: ContributeDataConfig = {
  data: {
    datasets: {
      source: "default/contribute-data/contributor_datasets.json",
      idField: "id"
    }
  },
  pages: {
    index: {
      title: "Register as a data contributor"
    },
    portal: {
      title: "Your Dataset Uploads",
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
      title: "Upload a new dataset",
      description: "Description of this app section"
    },
    review: {
      title: "Review your new dataset"
    }
  }
}