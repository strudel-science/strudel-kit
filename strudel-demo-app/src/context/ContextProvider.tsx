import React, {  useReducer, useContext } from 'react';
import { AppAction } from './actions';

export interface AppState {
  projectTitle: string;
}

/**
 * AppProviderProps props are the same as the State except
 * some of the required props in the State are optional props.
 * These props have default values set in the initialState object.
 */
interface AppProviderProps extends Partial<AppState> {
  children: React.ReactNode;
}

const AppContext = React.createContext<{state: AppState; dispatch: React.Dispatch<AppAction>} | undefined>(undefined);

const initialState: AppState = {
  projectTitle: '',
};

const initState = (initialState: AppState, props: AppProviderProps) => {
  const {children, ...rest} = props;
  return {
    ...initialState,
    ...rest
  }
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  const [state, dispatch] = useReducer(appReducer, initState(initialState, props));
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export const useAppState = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppProvider')
  }
  return context
}