import { FilterComponent } from '../../../components/FilterField';
import { FilterOperator } from '../../../types/filters.types';

/**
 * Type definitions for the Compare Data Task Flow config object
 */
export interface SearchDataRepositoriesConfig {
  /** Attributes that are used across the Task Flow */
  properties?: Record<string, any>;
  data: {
    list: {
      source: string;
      staticParams?: Record<string, string> | null;
      idField: string;
      queryMode: 'client' | 'server';
    };
    detail: {
      source: string;
      staticParams?: Record<string, string> | null;
      idField: string;
      queryMode: 'client' | 'server';
    };
    [key: string]: {
      source: string;
      staticParams?: Record<string, string> | null;
      idField: string;
      queryMode: 'client' | 'server';
    };
  };
  /** Cool pages */
  pages: {
    index: {
      title: string;
      description: string;
      cardFields: {
        title: string;
        content: string;
        tags: string;
      };
      cardFilters: {
        field: string;
        label: string;
        operator: FilterOperator;
        filterComponent: FilterComponent;
        filterProps?: object;
      }[];
    };
  };
}
