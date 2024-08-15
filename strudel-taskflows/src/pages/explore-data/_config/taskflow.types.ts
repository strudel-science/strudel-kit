import { GridColDef } from "@mui/x-data-grid"
import { FilterComponent, FilterOperator } from "@strudel-science/components/dist/components/FilterField"

/**
 * Type definitions for the Compare Data Task Flow config object
 */
export interface ExploreDataConfig {
  /** Attributes that are used across the Task Flow */
  properties?: Record<string, any>,
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
      tableColumns: GridColDef[],
      tableFilters: {
        field: string,
        label: string,
        operator: FilterOperator
        filterComponent: FilterComponent,
        filterProps?: object
      }[]
    }
  }
}