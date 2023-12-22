import { CompareScenariosState } from './ContextProvider';

export enum CompareScenariosActionType {
  SET_DATA = 'SET_DATA',
  SET_SELECTED_ROWS = 'SET_SELECTED_ROWS',
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