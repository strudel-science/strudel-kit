import { GridColDef } from "@mui/x-data-grid"

/**
 * Type definitions for the Compare Data Task Flow config object
 */
export interface RunComputationConfig {
  /** Attributes that are used across the Task Flow */
  properties: {
    itemName: string,
    itemNamePlural: string
  },
  data: {
    items: {
      source: string,
      idField: string
    },
    inputs: {
      source: string,
      idField: string
    },
    results: {
      source: string,
      idField: string
    },
    barChart: {
      source: string,
      idField?: string
    },
    lineChart: {
      source: string,
      idField?: string
    },
    [key: string]: {
      source: string,
      idField?: string
    }
  },
  /** Cool pages */
  pages: {
    index: {
      title: string,
      description: string,
      tableColumns: GridColDef[]
    },
    dataInputs: {
      title: string,
      tableColumns: GridColDef[]
    },
    settings: {
      title: string,
    },
    results: {
      title: string,
      tableColumns: GridColDef[]
    },

  }
}