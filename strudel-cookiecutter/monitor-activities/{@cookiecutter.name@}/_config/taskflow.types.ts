/**
 * Type definitions for the Monitor Activities Task Flow config object
 */
export interface MonitorActivitiesConfig {
  /** Attributes that are used across the Task Flow */
  properties?: any
  data: {
    items: {
      source: string,
      idField: string
    },
    [key: string]: {
      source: string,
      idField: string
    }
  },
  pages?: any
}