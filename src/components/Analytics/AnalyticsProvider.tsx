import React, { useEffect, useReducer, useContext } from 'react';
import { AnalyticsAction, AnalyticsActionType, setFilteredData } from './actions';
import { filterData } from './utils';

export enum FilterOperator {
  CONTAINS = 'CONTAINS',
  EQUALS = 'EQUALS',
  EQUALS_ONE_OF = 'EQUALS_ONE_OF',
  BETWEEN = 'BETWEEN'
}

export interface DataFilter {
  field: string;
  value: string | number | (string | number)[] | null;
  operator: string;
}

export interface AnalyticsState {
  columns: any[];
  count?: number;
  data?: any[];
  filteredData?: any[];
  activeFilters: DataFilter[];
  filterValues?: object;
  previewItem?: any;
  searchTerm?: string;
  showFiltersPanel?: boolean;
}

interface AnalyticsProviderProps extends Omit<AnalyticsState, 'activeFilters'> {
  activeFilters?: DataFilter[];
  children: React.ReactNode 
}

const AnalyticsContext = React.createContext<{state: AnalyticsState; dispatch: React.Dispatch<AnalyticsAction>} | undefined>(undefined);

const initialState: AnalyticsState = {
  data: [],
  columns: [],
  filterValues: {},
  activeFilters: []
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
    if (!state.filteredData) {
      dispatch(setFilteredData(state.data));
    }
  }, []);

  useEffect(() => {
    if (state.data) {
      const filteredData = filterData(state.data, state.activeFilters, state.searchTerm);
      dispatch(setFilteredData(filteredData));
    }
  }, [state.searchTerm, JSON.stringify(state.activeFilters)]);

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