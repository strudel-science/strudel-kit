import { MonitorActivitiesConfig } from "./taskflow.types";

export const taskflow: MonitorActivitiesConfig = {
  data: {
    items: {
      source: "default/monitor-activities/experiments.json",
      idField: "id"
    },
    detail: {
      source: "default/monitor-activities/experiment_detail.json",
      idField: "id"
    }
  },
}