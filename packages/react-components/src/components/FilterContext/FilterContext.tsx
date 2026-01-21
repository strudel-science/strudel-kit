import React, {
  PropsWithChildren,
  useEffect,
  useReducer,
} from 'react';
import { FilterOperator } from '../../types/filters.types';
import { FilterContextAPI } from './useFilters';

export interface DataFilter {
  field: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: string | any[] | null;
  operator: FilterOperator;
}

export interface FilterState {
  activeFilters: DataFilter[];
  expandedGroup: string | number | boolean;
}

const initialState: FilterState = {
  activeFilters: [],
  expandedGroup: false,
};

export type FilterAction =
  | {
      type: 'SET_FILTER';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      payload: { field: string; value: any; operator: FilterOperator };
    }
  | { type: 'SET_ACTIVE_FILTERS'; payload: FilterState['activeFilters'] }
  | { type: 'SET_EXPANDED_GROUP'; payload: FilterState['expandedGroup'] };

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'SET_FILTER': {
      const filter = action.payload;
      const existingIndex = state.activeFilters.findIndex(
        (f) => f.field === filter.field
      );
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
        activeFilters,
      };
    }
    case 'SET_ACTIVE_FILTERS': {
      return {
        ...state,
        activeFilters: action.payload,
      };
    }
    case 'SET_EXPANDED_GROUP': {
      return {
        ...state,
        expandedGroup: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

interface FilterContextProps extends PropsWithChildren {
  activeFilters?: FilterState['activeFilters'];
  onChange?: (filters: FilterState['activeFilters']) => void;
}

export const FilterContext: React.FC<FilterContextProps> = ({
  activeFilters = [],
  onChange = () => null,
  children,
}) => {
  const [state, dispatch] = useReducer(filterReducer, {
    ...initialState,
    activeFilters,
  });
  const value = {
    activeFilters: state.activeFilters,
    expandedGroup: state.expandedGroup,
    dispatch,
  };

  /**
   * Emit a change event when state.activeFilters changes
   */
  useEffect(() => {
    if (onChange) onChange(state.activeFilters);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(state.activeFilters)]);

  return (
    <FilterContextAPI.Provider value={value}>
      {children}
    </FilterContextAPI.Provider>
  );
};
