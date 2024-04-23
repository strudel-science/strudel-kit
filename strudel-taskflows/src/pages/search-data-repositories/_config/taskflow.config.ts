import { SearchDataRepositoriesConfig } from "./taskflow.types";

export const taskflow: SearchDataRepositoriesConfig = {
  data: {
    items: {
      source: "default/search-data-repositories/datasets.json",
      idField: "id"
    }
  },
  pages: {
    index: {
      title: "Search Data Repositories App",
      description: "Description of this app section",
      cardFields: {
        title: "title",
        content: "summary",
        tags: "tags"
      },
      cardFilters: [
        {
          field: "category",
          displayName: "Category",
          filterType: "CheckboxList",
          props: {
            options: [
              {
                label: "Groundwater",
                value: "Groundwater"
              },
              {
                label: "Fires",
                value: "Fires"
              },
              {
                label: "Floods",
                value: "Floods"
              },
              {
                label: "Earthquakes",
                value: "Earthquakes"
              }
            ]
          }
        },
        {
          field: "tags",
          displayName: "Tags",
          filterType: "CheckboxList",
          props: {
            options: [
              {
                label: "Boreal forest",
                value: "Boreal forest"
              },
              {
                label: "Carbon and greenhouse gas emissions",
                value: "Carbon and greenhouse gas emissions"
              },
              {
                label: "Ecology",
                value: "Ecology"
              }
            ]
          }
        },
        {
          field: "publication_date",
          displayName: "Publication Date",
          filterType: "date range"
        }
      ]
    }
  }
}