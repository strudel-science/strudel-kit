import { ContributingDataState } from './ContextProvider';

export enum ContributingDataActionType {
  RUN_CHECKS = 'RUN_CHECKS',
  FINISH_CHECKS = 'FINISH_CHECKS',
}

export interface ContributingDataAction {
  type: ContributingDataActionType;
  payload?: any;
}

export const runChecks = (): ContributingDataAction => ({
  type: ContributingDataActionType.RUN_CHECKS,
});

export const finishChecks = (): ContributingDataAction => ({
  type: ContributingDataActionType.FINISH_CHECKS,
});