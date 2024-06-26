import React, { useContext, useEffect } from 'react';
import { ExploreDataAction, ExploreDataActionType, setData, setFilteredData } from './actions';
import { DataFilter, FilterConfig } from '../../../types/filters.types';
import { filterData } from '../../../utils/filters.utils';

export interface ExploreDataState {
  columns: any[];
  count?: number;
  data?: any[];
  dataIdField: string;
  filters: FilterConfig[];
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
 * ExploreDataProvider props are the same as the State except
 * some of the required props in the State are optional props.
 * These props have default values set in the initialState object.
 */
// interface ExploreDataProviderProps extends Omit<ExploreDataState, 
//   'activeFilters' | 
//   'columns' | 
//   'tablePage' | 
//   'tablePageSize'
// > {
interface ExploreDataProviderProps extends Partial<ExploreDataState> {
  activeFilters?: DataFilter[];
  columns?: any[];
  tablePage?: number;
  tablePageSize?: number;
  children: React.ReactNode; 
}

const ExploreDataContext = React.createContext<{state: ExploreDataState; dispatch: React.Dispatch<ExploreDataAction>} | undefined>(undefined);

const initialState: ExploreDataState = {
  data: [],
  columns: [],
  filters: [],
  filterValues: {},
  activeFilters: [],
  dataIdField: 'id',
  tablePage: 0,
  tablePageSize: 25
}

const initState = (initialState: ExploreDataState, props: ExploreDataProviderProps) => {
  const {children, ...rest} = props;
  return {
    ...initialState,
    ...rest
  }
};

function exploreDataReducer(state: ExploreDataState, action: ExploreDataAction): ExploreDataState {
  switch (action.type) {
    case ExploreDataActionType.SET_DATA: {
      return {
        ...state,
        data: action.payload
      }
    }
    case ExploreDataActionType.SET_SEARCH: {
      return {
        ...state,
        searchTerm: action.payload
      }
    }
    case ExploreDataActionType.SET_FILTERED_DATA: {
      return {
        ...state,
        filteredData: action.payload
      }
    }
    case ExploreDataActionType.SET_FILTER: {
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
    case ExploreDataActionType.SET_PREVIEW_ITEM: {
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

export const ExploreDataProvider: React.FC<ExploreDataProviderProps> = (props) => {
  const [state, dispatch] = React.useReducer(exploreDataReducer, initState(initialState, props));
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
    <ExploreDataContext.Provider value={value}>
      {props.children}
    </ExploreDataContext.Provider>
  )
}

export const useExploreData = () => {
  const context = useContext(ExploreDataContext)
  if (context === undefined) {
    throw new Error('useExploreData must be used within an ExploreDataProvider')
  }
  return context
}