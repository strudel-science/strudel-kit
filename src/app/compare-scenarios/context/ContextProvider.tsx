import React, { useEffect, useReducer, useContext } from 'react';
import { CompareScenariosAction, CompareScenariosActionType, setComparisonData, setData } from './actions';
import { CompareScenariosGridColDef } from '../CompareScenariosWrapper';

interface ComparisonRow {
  [key: string]: number | string | null | undefined;
}

export interface CompareScenariosState {
  data: any[];
  selectedRows: any[];
  columns: CompareScenariosGridColDef[];
  comparisonColumns: CompareScenariosGridColDef[];
  dataIdField: string;
  comparing?: boolean;
  comparisonData: ComparisonRow[]
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
  comparisonColumns?: CompareScenariosState['comparisonColumns'];
  children: React.ReactNode;
}

const CompareScenariosContext = React.createContext<{state: CompareScenariosState; dispatch: React.Dispatch<CompareScenariosAction>} | undefined>(undefined);

const initialState: CompareScenariosState = {
  data: [],
  columns: [],
  selectedRows: [],
  dataIdField: 'id',
  comparing: false,
  comparisonData: [],
  comparisonColumns: [],
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
    case CompareScenariosActionType.SET_COMPARISON_DATA: {
      return {
        ...state,
        comparisonData: action.payload.data,
        comparisonColumns: action.payload.columns,
      }
    }
    case CompareScenariosActionType.SET_COMPARING: {
      return {
        ...state,
        comparing: action.payload
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

  /**
   * Side effect to occur after comparing changes.
   * When comparing is set to true, generate data for
   * the comparison table based on the selected scenarios.
   */
  useEffect(() => {
    if (state.comparing && state.selectedRows.length > 1) {
      const metrics = state.columns.filter((c) => c.isComparisonMetric);
      const scenarios = state.data.filter((d) => state.selectedRows.indexOf(d.id) > -1);
      const comparisonColumns: CompareScenariosGridColDef[] = [
        {
          field: 'metric',
          headerName: 'Metric',
          width: 200,
          cellClassName: 'compare-scenarios--metric',
        }
      ];
      const comparisonData = metrics.map((m, i) => {
        const row: ComparisonRow = {};
        row.metric = m.headerName;
        scenarios.forEach((s) => {
          row[s.name] = s[m.field];
          if (i === 0) {
            comparisonColumns.push({
              field: s.name,
              headerName: s.name,
              width: 200
            });
          }
        });
        return row;
      });
      console.log(metrics);
      console.log(scenarios);
      console.log(comparisonData);
      console.log(comparisonColumns);
      dispatch(setComparisonData(comparisonData, comparisonColumns));
    }
  }, [state.comparing]);

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