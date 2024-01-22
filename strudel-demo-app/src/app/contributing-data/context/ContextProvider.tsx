import React, { useEffect, useReducer, useContext } from 'react';
import { ContributingDataAction, ContributingDataActionType } from './actions';
import { filterData } from './utils';

export interface DataFilter {
  field: string;
  value: string | number | any[] | null;
  operator: string;
}

export interface ContributingDataState {
  runningChecks?: boolean;
  checksComplete?: boolean;
}

/**
 * ContributingDataProvider props are the same as the State except
 * some of the required props in the State are optional props.
 * These props have default values set in the initialState object.
 */
interface ContributingDataProviderProps extends Omit<ContributingDataState, 'runningChecks'> {
  children: React.ReactNode;
}

const ContributingDataContext = React.createContext<{state: ContributingDataState; dispatch: React.Dispatch<ContributingDataAction>} | undefined>(undefined);

const initialState: ContributingDataState = {
  runningChecks: false,
  checksComplete: false,
}

function contributingDataReducer(state: ContributingDataState, action: ContributingDataAction): ContributingDataState {
  switch (action.type) {
    case ContributingDataActionType.RUN_CHECKS: {
      return {
        ...state,
        runningChecks: true
      }
    }
    case ContributingDataActionType.FINISH_CHECKS: {
      return {
        ...state,
        runningChecks: false,
        checksComplete: true,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const ContributingDataProvider: React.FC<ContributingDataProviderProps> = (props) => {
  const [state, dispatch] = React.useReducer(contributingDataReducer, initialState);
  const value = { state, dispatch };

  return (
    <ContributingDataContext.Provider value={value}>
      {props.children}
    </ContributingDataContext.Provider>
  )
}

export const useContributingData = () => {
  const context = useContext(ContributingDataContext)
  if (context === undefined) {
    throw new Error('useContributingData must be used within an ContributingDataProvider')
  }
  return context
}