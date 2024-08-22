import { FilterComponent } from "../../../components/FilterField"
import { SciDataGridColDef } from "../../../components/SciDataGrid"
import { FilterOperator } from "../../../types/filters.types"

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
  pages: {
    index: {
      title: string,
      description: string,
      tableColumns: SciDataGridColDef[],
      tableFilters: {
        field: string,
        label: string,
        operator?: FilterOperator,
        paramType?: 'standard' | 'repeated' | 'array-string'
        paramTypeOptions?: any;
        filterComponent: FilterComponent,
        filterProps?: object
      }[]
    }
  }
}