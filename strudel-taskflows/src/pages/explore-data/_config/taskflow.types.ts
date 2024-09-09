import { FilterComponent } from "../../../components/FilterField"
import { SciDataGridColDef } from "../../../components/SciDataGrid"
import { FilterOperator, ParamType } from "../../../types/filters.types"

/**
 * Type definitions for the Explore Data Task Flow config object
 */
export interface ExploreDataConfig {
  /** Attributes that are used across the Task Flow */
  properties?: Record<string, any>,
  data: {
    items: {
      source: string,
      idField: string,
      queryMode: 'client' | 'server',
      staticParams?: Record<string, string> | null
    },
    [key: string]: {
      source: string,
      idField: string,
      queryMode: 'client' | 'server',
      staticParams?: Record<string, string> | null
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
        paramType?: ParamType
        paramTypeOptions?: any;
        filterComponent: FilterComponent,
        filterProps?: object
      }[]
    }
  }
}