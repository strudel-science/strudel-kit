import { CompareScenariosState } from './ContextProvider';

export enum CompareScenariosActionType {
  SET_DATA = 'SET_DATA',
  SET_SELECTED_ROWS = 'SET_SELECTED_ROWS',
  SET_COMPARISON_DATA = 'SET_COMPARISON_DATA',
  SET_COMPARING = 'SET_COMPARING',
}

export interface CompareScenariosAction {
  type: CompareScenariosActionType;
  payload?: any;
}

export const setData = (data: CompareScenariosState['data']): CompareScenariosAction => ({
  type: CompareScenariosActionType.SET_DATA,
  payload: data
});

export const setSelectedRows = (rows: CompareScenariosState['selectedRows']): CompareScenariosAction => ({
  type: CompareScenariosActionType.SET_SELECTED_ROWS,
  payload: rows
});

export const setComparisonData = (
  data: CompareScenariosState['comparisonData'], 
  columns: CompareScenariosState['comparisonColumns']
): CompareScenariosAction => ({
  type: CompareScenariosActionType.SET_COMPARISON_DATA,
  payload: { data, columns }
});

export const setComparing = (comparing: CompareScenariosState['comparing']): CompareScenariosAction => ({
  type: CompareScenariosActionType.SET_COMPARING,
  payload: comparing
});