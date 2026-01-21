import React from "react";
import { useContext } from "react";
import { FilterAction, FilterState } from "./FilterContext";

export const FilterContextAPI = React.createContext<
  | {
      activeFilters: FilterState['activeFilters'];
      expandedGroup: FilterState['expandedGroup'];
      dispatch: React.Dispatch<FilterAction>;
    }
  | undefined
>(undefined);

export const useFilters = () => {
  const context = useContext(FilterContextAPI);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterContext');
  }
  return context;
};