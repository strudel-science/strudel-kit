import React, { useContext, useReducer } from 'react';
import { RunComputationAction, RunComputationActionType } from './actions';

export interface RunComputationState {
  list: {
    table: {
      columns: any[];
      data: any;
      dataIdField: string;
    };
  };
  inputs: {
    table: {
      columns: any[];
      data: any[];
      dataIdField: string;
    };
  };
  results: {
    table: {
      columns: any[];
      data: any[];
      dataIdField: string;
    };
    lineChart: {
      data: any[];
    };
    barChart: {
      data: any[];
    };
  };
  selectedItem?: any;
}

/**
 * RunComputationProvider props are the same as the State except
 * some of the required props in the State are optional props.
 * These props have default values set in the initialState object.
 */
interface RunComputationProviderProps {
  list: Partial<RunComputationState['list']>;
  inputs: Partial<RunComputationState['inputs']>;
  results: Partial<RunComputationState['results']>;
  children: React.ReactNode;
}

const RunComputationContext = React.createContext<
  | {
      state: RunComputationState;
      dispatch: React.Dispatch<RunComputationAction>;
    }
  | undefined
>(undefined);

const initialState: RunComputationState = {
  list: {
    table: {
      columns: [],
      data: [],
      dataIdField: 'id',
    },
  },
  inputs: {
    table: {
      columns: [],
      data: [],
      dataIdField: 'id',
    },
  },
  results: {
    table: {
      columns: [],
      data: [],
      dataIdField: 'id',
    },
    lineChart: {
      data: [],
    },
    barChart: {
      data: [],
    },
  },
};

const initState = (
  state: RunComputationState,
  props: RunComputationProviderProps
) => {
  const st = { ...state };
  if (props.list?.table?.columns)
    st.list.table.columns = props.list.table.columns;
  if (props.list?.table?.data) st.list.table.data = props.list.table.data;
  if (props.list?.table?.dataIdField)
    st.list.table.dataIdField = props.list.table.dataIdField;
  if (props.inputs?.table?.columns)
    st.inputs.table.columns = props.inputs.table.columns;
  if (props.inputs?.table?.data) st.inputs.table.data = props.inputs.table.data;
  if (props.inputs?.table?.dataIdField)
    st.inputs.table.dataIdField = props.inputs.table.dataIdField;
  if (props.results?.table?.columns)
    st.results.table.columns = props.results.table.columns;
  if (props.results?.table?.data)
    st.results.table.data = props.results.table.data;
  if (props.results?.table?.dataIdField)
    st.results.table.dataIdField = props.results.table.dataIdField;
  return st;
};

function runComputationReducer(
  state: RunComputationState,
  action: RunComputationAction
): RunComputationState {
  switch (action.type) {
    case RunComputationActionType.SET_LIST_TABLE_DATA: {
      return {
        ...state,
        list: {
          table: {
            ...state.list.table,
            data: action.payload,
          },
        },
      };
    }
    case RunComputationActionType.SET_INPUTS_TABLE_DATA: {
      return {
        ...state,
        inputs: {
          table: {
            ...state.inputs.table,
            data: action.payload,
          },
        },
      };
    }
    case RunComputationActionType.SET_RESULTS_TABLE_DATA: {
      return {
        ...state,
        results: {
          ...state.results,
          table: {
            ...state.results.table,
            data: action.payload,
          },
        },
      };
    }
    case RunComputationActionType.SET_RESULTS_LINECHART_DATA: {
      return {
        ...state,
        results: {
          ...state.results,
          lineChart: {
            ...state.results.lineChart,
            data: action.payload,
          },
        },
      };
    }
    case RunComputationActionType.SET_RESULTS_BARCHART_DATA: {
      return {
        ...state,
        results: {
          ...state.results,
          barChart: {
            ...state.results.barChart,
            data: action.payload,
          },
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const RunComputationProvider: React.FC<RunComputationProviderProps> = (
  props
) => {
  const [state, dispatch] = useReducer(
    runComputationReducer,
    initState(initialState, props)
  );
  const value = { state, dispatch };

  return (
    <RunComputationContext.Provider value={value}>
      {props.children}
    </RunComputationContext.Provider>
  );
};

export const useRunComputation = () => {
  const context = useContext(RunComputationContext);
  if (context === undefined) {
    throw new Error(
      'useRunComputation must be used within an RunComputationProvider'
    );
  }
  return context;
};
