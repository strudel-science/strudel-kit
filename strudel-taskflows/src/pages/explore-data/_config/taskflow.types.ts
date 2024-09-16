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
    list: {
      source: string,
      staticParams?: Record<string, string> | null,
      idField: string,
      queryMode: 'client' | 'server',
    },
    detail: {
      source: string,
      staticParams?: Record<string, string> | null,
      idField: string,
      queryMode: 'client' | 'server',
    },
    [key: string]: {
      source: string,
      staticParams?: Record<string, string> | null,
      idField: string,
      queryMode: 'client' | 'server',
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