import React, { useEffect, useReducer, useContext } from 'react';
import { AnalyticsAction, AnalyticsActionType, setData, setFilteredData } from './actions';
import { filterData } from './utils';

export enum FilterOperator {
  CONTAINS = 'CONTAINS',
  EQUALS = 'EQUALS',
  EQUALS_ONE_OF = 'EQUALS_ONE_OF',
  BETWEEN = 'BETWEEN'
}

export interface DataFilter {
  field: string;
  value: string | number | any[] | null;
  operator: string;
}

export interface AnalyticsState {
  columns: any[];
  count?: number;
  data?: any[];
  dataIdField: string;
  filteredData?: any[];
  activeFilters: DataFilter[];
  filterValues?: any;
  previewItem?: any;
  searchTerm?: string;
  showFiltersPanel?: boolean;
  tablePage: number,
  tablePageSize: number
}

/**
 * AnalyticsProvider props are the same as the State except
 * some of the required props in the State are optional props.
 * These props have default values set in the initialState object.
 */
// interface AnalyticsProviderProps extends Omit<AnalyticsState, 
//   'activeFilters' | 
//   'columns' | 
//   'tablePage' | 
//   'tablePageSize'
// > {
interface AnalyticsProviderProps extends Partial<AnalyticsState> {
  activeFilters?: DataFilter[];
  columns?: any[];
  tablePage?: number;
  tablePageSize?: number;
  children: React.ReactNode; 
}

const AnalyticsContext = React.createContext<{state: AnalyticsState; dispatch: React.Dispatch<AnalyticsAction>} | undefined>(undefined);

const initialState: AnalyticsState = {
  data: [],
  columns: [],
  filterValues: {},
  activeFilters: [],
  dataIdField: 'id',
  tablePage: 0,
  tablePageSize: 25
}

const initState = (initialState: AnalyticsState, props: AnalyticsProviderProps) => {
  const {children, ...rest} = props;
  return {
    ...initialState,
    ...rest
  }
};

function analyticsReducer(state: AnalyticsState, action: AnalyticsAction): AnalyticsState {
  switch (action.type) {
    case AnalyticsActionType.SET_DATA: {
      return {
        ...state,
        data: action.payload
      }
    }
    case AnalyticsActionType.SET_SEARCH: {
      return {
        ...state,
        searchTerm: action.payload
      }
    }
    case AnalyticsActionType.SET_FILTERED_DATA: {
      return {
        ...state,
        filteredData: action.payload
      }
    }
    case AnalyticsActionType.SET_FILTER: {
      console.log(action);
      const filter = action.payload;
      const existingIndex = state.activeFilters.findIndex((f) => f.field === filter.field);
      const activeFilters = [...state.activeFilters];
      if (existingIndex > -1) {
        if (filter.value) {
          activeFilters[existingIndex] = filter;
        } else {
          activeFilters.splice(existingIndex, 1);
        }
      } else if (filter.value) {
        activeFilters.push(filter);
      }
      return {
        ...state,
        activeFilters
      }
    }
    case AnalyticsActionType.SET_PREVIEW_ITEM: {
      return {
        ...state,
        previewItem: action.payload
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = (props) => {
  const [state, dispatch] = React.useReducer(analyticsReducer, initState(initialState, props));
  const value = { state, dispatch };

  useEffect(() => {
    console.log(props.data);
    dispatch(setData(props.data));
  }, [props.data]);

  useEffect(() => {
    if (state.data) {
      const filteredData = filterData(state.data, state.activeFilters, state.searchTerm);
      dispatch(setFilteredData(filteredData));
    }
  }, [state.data, state.searchTerm, JSON.stringify(state.activeFilters)]);

  return (
    <AnalyticsContext.Provider value={value}>
      {props.children}
    </AnalyticsContext.Provider>
  )
}

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}