export enum ContributeDataActionType {
  RUN_CHECKS = 'RUN_CHECKS',
  FINISH_CHECKS = 'FINISH_CHECKS',
}

export interface ContributeDataAction {
  type: ContributeDataActionType;
  payload?: any;
}

export const runChecks = (): ContributeDataAction => ({
  type: ContributeDataActionType.RUN_CHECKS,
});

export const finishChecks = (): ContributeDataAction => ({
  type: ContributeDataActionType.FINISH_CHECKS,
});
