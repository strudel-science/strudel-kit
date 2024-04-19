import { GridColDef } from "@mui/x-data-grid"

export type CompareDataConfigColDef = GridColDef & {
  isComparisonMetric?: boolean;
}

export interface CompareDataConfig {
  /** Attributes that are used across the Task Flow */
  properties: {
    /** Name of entity being compared */
    itemName: string,
    /** Pluralized version of itemName */
    itemNamePlural: string,
  },
  data: {
    list: {
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