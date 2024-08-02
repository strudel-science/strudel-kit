import React, { PropsWithChildren, useContext, useEffect, useReducer } from 'react';

export interface FilterState {
  activeFilters: { [key: string]: any }
  expandedGroup: string | number | boolean;
}

const FilterContextAPI = React.createContext<{state: FilterState; dispatch: React.Dispatch<FilterAction>} | undefined>(undefined);

const initialState: FilterState = {
  activeFilters: {},
  expandedGroup: false,
}

export type FilterAction = 
  | { type: 'SET_FILTER', payload: { field: string, value: any } }
  | { type: 'SET_ACTIVE_FILTERS', payload:FilterState['activeFilters'] }
  | { type: 'SET_EXPANDED_GROUP', payload: FilterState['expandedGroup']; }

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'SET_FILTER': {
      return {
        ...state,
        activeFilters: { ...state.activeFilters, [action.payload.field]: action.payload.value }
      }
    }
    case 'SET_ACTIVE_FILTERS': {
      return {
        ...state,
        activeFilters: action.payload
      }
    }
    case 'SET_EXPANDED_GROUP': {
      return {
        ...state,
        expandedGroup: action.payload
      }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

interface FilterContextProps extends PropsWithChildren {
  activeFilters?: FilterState['activeFilters'];
  onChange?: (filters: FilterState['activeFilters']) => void;
}

export const FilterContext: React.FC<FilterContextProps> = ({ 
  activeFilters = {},
  onChange = (filters) => null,
  children 
}) => {
  const [state, dispatch] = useReducer(filterReducer, { ...initialState, activeFilters });
  const value = { state, dispatch };

  /**
   * Emit a change event when state.activeFilters changes
   */
  useEffect(() => {
    if (onChange) onChange(state.activeFilters);
  }, [state.activeFilters]);

  /**
   * If activeFilters is changed from outside the context (e.g. filters are reset)
   * then the new value should be dispatched.
   */
  useEffect(() => {
    dispatch({ type: 'SET_ACTIVE_FILTERS', payload: activeFilters });
  }, [activeFilters]);

  return (
    <FilterContextAPI.Provider value={value}>
      {children}
    </FilterContextAPI.Provider>
  )
}

export const useFilters = () => {
  const context = useContext(FilterContextAPI)
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterContext')
  }
  return context
}