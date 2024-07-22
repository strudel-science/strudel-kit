import React, { PropsWithChildren, useContext, useEffect } from 'react';

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
  | { type: 'SET_EXPANDED_GROUP', payload: FilterState['expandedGroup']; }

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'SET_FILTER': {
      return {
        ...state,
        activeFilters: { ...state.activeFilters, [action.payload.field]: action.payload.value }
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

export const FilterContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(filterReducer, initialState);
  const value = { state, dispatch };

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