import { GridColDef } from "@mui/x-data-grid"

export type CompareDataConfigColDef = GridColDef & {
  isComparisonMetric?: boolean;
}

/**
 * Type definitions for the Compare Data Task Flow config object
 */
export interface CompareDataConfig {
  properties: {
    itemName: string,
    itemNamePlural: string,
  },
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
  /** Cool pages */
  pages: {
    index: {
      title: string,
      description: string,
      tableColumns: CompareDataConfigColDef[]
    },
    new: {
      title: string,
      description: string
    },
    compare: {
      title: string,
      description: string
    }
  }
}