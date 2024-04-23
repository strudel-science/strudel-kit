import { GridColDef } from "@mui/x-data-grid"

/**
 * Type definitions for the Compare Data Task Flow config object
 */
export interface ContributeDataConfig {
  /** Attributes that are used across the Task Flow */
  properties?: Record<string, any>,
  data: {
    datasets: {
      source: string,
      idField: string
    },
    [key: string]: {
      source: string,
      idField: string
    }
  },
  /** Cool pages */
  pages: {
    index: {
      title: string,
    },
    portal: {
      title: string,
      tableColumns: GridColDef[]
    },
    new: {
      title: string,
      description: string
    },
    review: {
      title: string,
    },
  }
}