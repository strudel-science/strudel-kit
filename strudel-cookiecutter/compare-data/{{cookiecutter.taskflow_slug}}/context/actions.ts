import { CompareDataState } from './ContextProvider';

export enum CompareDataActionType {
  SET_DATA = 'SET_DATA',
  SET_SELECTED_ROWS = 'SET_SELECTED_ROWS',
  SET_COMPARISON_DATA = 'SET_COMPARISON_DATA',
  SET_COMPARING = 'SET_COMPARING',
}

export interface CompareDataAction {
  type: CompareDataActionType;
  payload?: any;
}

export const setData = (data: CompareDataState['data']): CompareDataAction => ({
  type: CompareDataActionType.SET_DATA,
  payload: data
});

export const setSelectedRows = (rows: CompareDataState['selectedRows']): CompareDataAction => ({
  type: CompareDataActionType.SET_SELECTED_ROWS,
  payload: rows
});

export const setComparisonData = (
  data: CompareDataState['comparisonData'], 
  columns: CompareDataState['comparisonColumns']
): CompareDataAction => ({
  type: CompareDataActionType.SET_COMPARISON_DATA,
  payload: { data, columns }
});

export const setComparing = (comparing: CompareDataState['comparing']): CompareDataAction => ({
  type: CompareDataActionType.SET_COMPARING,
  payload: comparing
});