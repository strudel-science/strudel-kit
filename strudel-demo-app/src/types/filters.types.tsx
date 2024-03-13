export interface DataFilter {
  field: string;
  value: string | number | any[] | null;
  operator: string;
}

export interface FilterConfig {
  field: string;
  displayName: string;
  filterType: string;
  group?: string;
  tooltip?: string;
  props: any;
}

export enum FilterOperator {
  CONTAINS = 'CONTAINS',
  EQUALS = 'EQUALS',
  EQUALS_ONE_OF = 'EQUALS_ONE_OF',
  BETWEEN = 'BETWEEN'
}