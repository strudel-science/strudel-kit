import React, { useEffect, useReducer, useContext } from 'react';
import { CompareScenariosAction, CompareScenariosActionType, setData } from './actions';

export interface CompareScenariosState {
  data: any[];
  selectedRows: any[];
  columns: any[];
  dataIdField: string;
}

/**
 * CompareScenariosProvider props are the same as the State except
 * some of the required props in the State are optional props.
 * These props have default values set in the initialState object.
 * 
 * Switched to using Partial<> so that the props doesn't abide by the same
 * required props as the State, but this leaves it unclear which props are
 * optional when initiating a Provider component. But it is simpler.
 * Not sure yet which to stick with going forward.
 */
interface CompareScenariosProviderProps extends Partial<CompareScenariosState> {
  data?: CompareScenariosState['data'];
  children: React.ReactNode;
}

const CompareScenariosContext = React.createContext<{state: CompareScenariosState; dispatch: React.Dispatch<CompareScenariosAction>} | undefined>(undefined);

const initialState: CompareScenariosState = {
  data: [],
  columns: [],
  selectedRows: [],
  dataIdField: 'id',
}

const initState = (initialState: CompareScenariosState, props: CompareScenariosProviderProps) => {
  const {children, ...rest} = props;
  return {
    ...initialState,
    ...rest
  }
};

function compareScenariosReducer(state: CompareScenariosState, action: CompareScenariosAction): CompareScenariosState {
  switch (action.type) {
    case CompareScenariosActionType.SET_DATA: {
      return {
        ...state,
        data: action.payload
      }
    }
    case CompareScenariosActionType.SET_SELECTED_ROWS: {
      return {
        ...state,
        selectedRows: action.payload
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const CompareScenariosProvider: React.FC<CompareScenariosProviderProps> = (props) => {
  const [state, dispatch] = React.useReducer(compareScenariosReducer, initState(initialState, props));
  const value = { state, dispatch };

  useEffect(() => {
    if (props.data) {
      dispatch(setData(props.data));
    }
  }, [props.data]);

  return (
    <CompareScenariosContext.Provider value={value}>
      {props.children}
    </CompareScenariosContext.Provider>
  )
}

export const useCompareScenarios = () => {
  const context = useContext(CompareScenariosContext)
  if (context === undefined) {
    throw new Error('useCompareScenarios must be used within an CompareScenariosProvider')
  }
  return context
}