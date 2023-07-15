import * as React from 'react'

enum ActionType {
  SEARCH = 'SEARCH'
}

interface Action {
  type: ActionType;
  payload?: any;
}

interface State {
  data: any[];
  filteredData?: any[];
  searchTerm?: string;
  count?: number;
}

interface AnalyticsProviderProps extends State { children: React.ReactNode }

const AnalyticsContext = React.createContext<{state: State; dispatch: React.Dispatch<Action>} | undefined>(undefined);

const initialState: State = {
  data: [],
  filteredData: []
}

function analyticsReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.SEARCH: {
      const filteredData = state.data.filter((d) => {
        const rowString = JSON.stringify(d);
        return rowString.indexOf(action.payload);
      });
      return {
        ...state,
        filteredData
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(analyticsReducer, initialState)
  const value = {state, dispatch}
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export const useAnalytics = () => {
  const context = React.useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error('useAnalytics must be used within a CountProvider')
  }
  return context
}