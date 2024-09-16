import React, { useEffect, useReducer, useContext } from 'react';
import { SearchDataRepositoriesAction, SearchDataRepositoriesActionType, setData, setFilteredData } from './actions';
import { DataCard, DataFilter, FilterConfig } from '../../../types/filters.types';
import { filterData } from '../../../utils/filters.utils';

export interface SearchDataRepositoriesState {
  cardFields: DataCard;
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
 * SearchDataRepositoriesProvider props are the same as the State except
 * some of the required props in the State are optional props.
 * These props have default values set in the initialState object.
 */
interface SearchDataRepositoriesProviderProps extends Partial<SearchDataRepositoriesState> {
  activeFilters?: DataFilter[];
  cardFields?: DataCard;
  columns?: any[];
  tablePage?: number;
  tablePageSize?: number;
  children: React.ReactNode; 
}

const SearchDataRepositoriesContext = React.createContext<{state: SearchDataRepositoriesState; dispatch: React.Dispatch<SearchDataRepositoriesAction>} | undefined>(undefined);

const initialState: SearchDataRepositoriesState = {
  data: [],
  cardFields: {
    title: '',
    content: '',
    tags: '',
  },
  columns: [],
  filters: [],
  filterValues: {},
  activeFilters: [],
  dataIdField: 'id',
  tablePage: 0,
  tablePageSize: 25
}

const initState = (initialState: SearchDataRepositoriesState, props: SearchDataRepositoriesProviderProps) => {
  const {children, ...rest} = props;
  return {
    ...initialState,
    ...rest
  }
};

function searchDataRepositoriesReducer(state: SearchDataRepositoriesState, action: SearchDataRepositoriesAction): SearchDataRepositoriesState {
  switch (action.type) {
    case SearchDataRepositoriesActionType.SET_DATA: {
      return {
        ...state,
        data: action.payload
      }
    }
    case SearchDataRepositoriesActionType.SET_SEARCH: {
      return {
        ...state,
        searchTerm: action.payload
      }
    }
    case SearchDataRepositoriesActionType.SET_FILTERED_DATA: {
      return {
        ...state,
        filteredData: action.payload
      }
    }
    case SearchDataRepositoriesActionType.SET_FILTER: {
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
    case SearchDataRepositoriesActionType.SET_PREVIEW_ITEM: {
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

export const SearchDataRepositoriesProvider: React.FC<SearchDataRepositoriesProviderProps> = (props) => {
  const [state, dispatch] = useReducer(searchDataRepositoriesReducer, initState(initialState, props));
  const value = { state, dispatch };

  useEffect(() => {
    console.log(props.data);
    dispatch(setData(props.data));
  }, [props.data]);

  useEffect(() => {
    if (state.data) {
      const filteredData = filterData(state.data, state.activeFilters, state.filters, state.searchTerm);
      dispatch(setFilteredData(filteredData));
    }
  }, [state.data, state.searchTerm, JSON.stringify(state.activeFilters)]);

  return (
    <SearchDataRepositoriesContext.Provider value={value}>
      {props.children}
    </SearchDataRepositoriesContext.Provider>
  )
}

export const useSearchDataRepositories = () => {
  const context = useContext(SearchDataRepositoriesContext)
  if (context === undefined) {
    throw new Error('useSearchDataRepositories must be used within an SearchDataRepositoriesProvider')
  }
  return context
}