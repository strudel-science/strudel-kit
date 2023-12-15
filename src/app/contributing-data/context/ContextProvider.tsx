import React, { useEffect, useReducer, useContext } from 'react';
import { ContributingDataAction, ContributingDataActionType, setData, setFilteredData } from './actions';
import { filterData } from './utils';

export interface DataFilter {
  field: string;
  value: string | number | any[] | null;
  operator: string;
}

export interface ContributingDataState {
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
 * ContributingDataProvider props are the same as the State except
 * some of the required props in the State are optional props.
 * These props have default values set in the initialState object.
 */
interface ContributingDataProviderProps extends Omit<ContributingDataState, 'activeFilters' | 'columns' | 'tablePage' | 'tablePageSize'> {
  activeFilters?: DataFilter[];
  columns?: any[];
  tablePage?: number,
  tablePageSize?: number
  children: React.ReactNode 
}

const ContributingDataContext = React.createContext<{state: ContributingDataState; dispatch: React.Dispatch<ContributingDataAction>} | undefined>(undefined);

const initialState: ContributingDataState = {
  data: [],
  columns: [],
  filterValues: {},
  activeFilters: [],
  dataIdField: 'id',
  tablePage: 0,
  tablePageSize: 25
}

const initState = (initialState: ContributingDataState, props: ContributingDataProviderProps) => {
  const {children, ...rest} = props;
  return {
    ...initialState,
    ...rest
  }
};

function analyticsReducer(state: ContributingDataState, action: ContributingDataAction): ContributingDataState {
  switch (action.type) {
    case ContributingDataActionType.SET_DATA: {
      return {
        ...state,
        data: action.payload
      }
    }
    case ContributingDataActionType.SET_SEARCH: {
      return {
        ...state,
        searchTerm: action.payload
      }
    }
    case ContributingDataActionType.SET_FILTERED_DATA: {
      return {
        ...state,
        filteredData: action.payload
      }
    }
    case ContributingDataActionType.SET_FILTER: {
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
    case ContributingDataActionType.SET_PREVIEW_ITEM: {
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

export const ContributingDataProvider: React.FC<ContributingDataProviderProps> = (props) => {
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
    <ContributingDataContext.Provider value={value}>
      {props.children}
    </ContributingDataContext.Provider>
  )
}

export const useContributingData = () => {
  const context = useContext(ContributingDataContext)
  if (context === undefined) {
    throw new Error('useContributingData must be used within an ContributingDataProvider')
  }
  return context
}