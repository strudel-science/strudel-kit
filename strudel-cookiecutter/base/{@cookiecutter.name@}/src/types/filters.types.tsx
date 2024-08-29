export type ParamType = 'standard' | 'array-string' | 'repeated' | 'minmax';

export type FilterOperator = 'contains' | 'contains-one-of' | 'equals' | 'equals-one-of' | 'between-inclusive' | 'between-dates-inclusive';

export interface DataFilter {
  field: string;
  value: string | number | string[] | number[] | null;
}

export interface FilterConfig {
  field: string;
  label: string;
  operator?: string;
  paramType?: ParamType;
  paramTypeOptions?: any;
  filterComponent: string;
  filterProps?: any;
}

export interface DataCard {
  title: string;
  content?: string;
  tags?: string;
}