export type ParamType = 'standard' | 'array-string' | 'repeated' | 'minmax';

export type FilterOperator =
  | 'contains'
  | 'contains-one-of'
  | 'equals'
  | 'equals-one-of'
  | 'between-inclusive'
  | 'between-dates-inclusive';

export type FilterComponent =
  | 'RangeSlider'
  | 'CheckboxList'
  | 'DateRange'
  | 'TextField';

/**
 * The type of the value should be dependent on the filterComponent
 */
export type FilterValue<T> = T extends 'RangeSlider'
  ? number[]
  : T extends 'CheckboxList'
    ? string[] | number[] | null
    : T extends 'DateRange'
      ? [Date | null, Date | null]
      : T extends 'TextField'
        ? string | null
        : never;

export interface DataFilter {
  field: string;
  value: string | number | string[] | number[] | null;
}

export interface FilterConfig {
  field: string;
  label: string;
  operator?: FilterOperator;
  paramType?: ParamType;
  paramTypeOptions?: any;
  filterComponent: FilterComponent;
  filterProps?: any;
}

export interface DataCard {
  title: string;
  content?: string;
  tags?: string;
}
