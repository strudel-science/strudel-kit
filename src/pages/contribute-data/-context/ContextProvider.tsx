import React, { useContext } from 'react';
import { ContributeDataAction, ContributeDataActionType } from './actions';

export interface DataFilter {
  field: string;
  value: string | number | any[] | null;
  operator: string;
}

export interface ContributeDataState {
  runningChecks?: boolean;
  checksComplete?: boolean;
}

/**
 * ContributeDataProvider props are the same as the State except
 * some of the required props in the State are optional props.
 * These props have default values set in the initialState object.
 */
interface ContributeDataProviderProps
  extends Omit<ContributeDataState, 'runningChecks'> {
  children: React.ReactNode;
}

const ContributeDataContext = React.createContext<
  | {
      state: ContributeDataState;
      dispatch: React.Dispatch<ContributeDataAction>;
    }
  | undefined
>(undefined);

const initialState: ContributeDataState = {
  runningChecks: false,
  checksComplete: false,
};

function contributingDataReducer(
  state: ContributeDataState,
  action: ContributeDataAction
): ContributeDataState {
  switch (action.type) {
    case ContributeDataActionType.RUN_CHECKS: {
      return {
        ...state,
        runningChecks: true,
      };
    }
    case ContributeDataActionType.FINISH_CHECKS: {
      return {
        ...state,
        runningChecks: false,
        checksComplete: true,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const ContributeDataProvider: React.FC<ContributeDataProviderProps> = (
  props
) => {
  const [state, dispatch] = React.useReducer(
    contributingDataReducer,
    initialState
  );
  const value = { state, dispatch };

  return (
    <ContributeDataContext.Provider value={value}>
      {props.children}
    </ContributeDataContext.Provider>
  );
};

export const useContributeData = () => {
  const context = useContext(ContributeDataContext);
  if (context === undefined) {
    throw new Error(
      'useContributeData must be used within an ContributeDataProvider'
    );
  }
  return context;
};
