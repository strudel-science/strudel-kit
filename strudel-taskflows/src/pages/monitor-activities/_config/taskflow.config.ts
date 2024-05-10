import { MonitorActivitiesConfig } from "./taskflow.types";

export const taskflow: MonitorActivitiesConfig = {
  data: {
    items: {
      /**
       * Source of the data for the initial list of items. 
       */
      source: "default/monitor-activities/experiments.json",
      /**
       * Field name for the unique ID in the data source.
       */
      idField: "id"
    },
    detail: {
      /**
       * Source of the data for the detail view of a single item. 
       */
      source: "default/monitor-activities/experiment_detail.json",
      /**
       * Field name for the unique ID in the data source.
       */
      idField: "id"
    }
  },
}