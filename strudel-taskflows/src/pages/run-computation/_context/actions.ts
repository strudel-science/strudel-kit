import { RunComputationState } from './ContextProvider';

export enum RunComputationActionType {
  SET_LIST_TABLE_DATA = 'SET_LIST_TABLE_DATA',
  SET_INPUTS_TABLE_DATA = 'SET_INPUTS_TABLE_DATA',
  SET_RESULTS_TABLE_DATA = 'SET_RESULTS_TABLE_DATA',
  SET_RESULTS_LINECHART_DATA = 'SET_RESULTS_LINECHART_DATA',
  SET_RESULTS_BARCHART_DATA = 'SET_RESULTS_BARCHART_DATA',
}

export interface RunComputationAction {
  type: RunComputationActionType;
  payload?: any;
}

export const setListTableData = (
  data: RunComputationState['list']['table']['data']
): RunComputationAction => ({
  type: RunComputationActionType.SET_LIST_TABLE_DATA,
  payload: data,
});

export const setInputsTableData = (
  data: RunComputationState['inputs']['table']['data']
): RunComputationAction => ({
  type: RunComputationActionType.SET_INPUTS_TABLE_DATA,
  payload: data,
});

export const setResultsTableData = (
  data: RunComputationState['results']['table']['data']
): RunComputationAction => ({
  type: RunComputationActionType.SET_RESULTS_TABLE_DATA,
  payload: data,
});

export const setResultsLineChartData = (
  data: RunComputationState['results']['lineChart']['data']
): RunComputationAction => ({
  type: RunComputationActionType.SET_RESULTS_LINECHART_DATA,
  payload: data,
});

export const setResultsBarChartData = (
  data: RunComputationState['results']['barChart']['data']
): RunComputationAction => ({
  type: RunComputationActionType.SET_RESULTS_BARCHART_DATA,
  payload: data,
});
