import React, { PropsWithChildren, useContext, useEffect } from 'react';

export interface FilterState {
  expandedGroup: string | number | boolean;
}

const FilterContextAPI = React.createContext<{state: FilterState; dispatch: React.Dispatch<FilterAction>} | undefined>(undefined);

const initialState: FilterState = {
  expandedGroup: false,
}

export enum FilterActionType {
  SET_EXPANDED_GROUP = 'SET_EXPANDED_GROUP',
}

export interface FilterAction {
  type: FilterActionType;
  payload?: any;
}

export const setExpandedGroup = (expandedGroup: FilterState['expandedGroup']): FilterAction => ({
  type: FilterActionType.SET_EXPANDED_GROUP,
  payload: expandedGroup,
});

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case FilterActionType.SET_EXPANDED_GROUP: {
      return {
        ...state,
        expandedGroup: action.payload
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
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