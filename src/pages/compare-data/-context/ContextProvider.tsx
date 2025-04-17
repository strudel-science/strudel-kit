import React, { useEffect, useReducer, useContext } from 'react';
import {
  CompareDataAction,
  CompareDataActionType,
  setComparisonData,
  setData,
} from './actions';
import { GridRowSelectionModel } from '@mui/x-data-grid';

interface ComparisonRow {
  [key: string]: number | string | null | undefined;
}

export interface CompareDataState {
  data: any[];
  selectedRows: GridRowSelectionModel;
  columns: any[];
  comparisonColumns: any[];
  dataIdField: string;
  comparing?: boolean;
  comparisonData: ComparisonRow[];
}

/**
 * CompareDataProvider props are the same as the State except
 * some of the required props in the State are optional props.
 * These props have default values set in the initialState object.
 *
 * Switched to using Partial<> so that the props doesn't abide by the same
 * required props as the State, but this leaves it unclear which props are
 * optional when initiating a Provider component. But it is simpler.
 * Not sure yet which to stick with going forward.
 */
interface CompareDataProviderProps extends Partial<CompareDataState> {
  data?: CompareDataState['data'];
  comparisonColumns?: CompareDataState['comparisonColumns'];
  children: React.ReactNode;
}

const CompareDataContext = React.createContext<
  | { state: CompareDataState; dispatch: React.Dispatch<CompareDataAction> }
  | undefined
>(undefined);

const initialState: CompareDataState = {
  data: [],
  columns: [],
  selectedRows: [],
  dataIdField: 'id',
  comparing: false,
  comparisonData: [],
  comparisonColumns: [],
};

const initState = (
  state: CompareDataState,
  props: CompareDataProviderProps
) => {
  const { children, ...rest } = props;
  return {
    ...state,
    ...rest,
  };
};

function CompareDataReducer(
  state: CompareDataState,
  action: CompareDataAction
): CompareDataState {
  switch (action.type) {
    case CompareDataActionType.SET_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case CompareDataActionType.SET_SELECTED_ROWS: {
      return {
        ...state,
        selectedRows: action.payload,
      };
    }
    case CompareDataActionType.SET_COMPARISON_DATA: {
      return {
        ...state,
        comparisonData: action.payload.data,
        comparisonColumns: action.payload.columns,
      };
    }
    case CompareDataActionType.SET_COMPARING: {
      return {
        ...state,
        comparing: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const CompareDataProvider: React.FC<CompareDataProviderProps> = (
  props
) => {
  const [state, dispatch] = useReducer(
    CompareDataReducer,
    initState(initialState, props)
  );
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
      const scenarios = state.data.filter(
        (d) => state.selectedRows.indexOf(d.id) > -1
      );
      const comparisonColumns: any[] = [
        {
          field: 'metric',
          headerName: 'Metric',
          width: 200,
          cellClassName: 'compare-data--metric',
        },
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
              width: 200,
            });
          }
        });
        return row;
      });
      dispatch(setComparisonData(comparisonData, comparisonColumns));
    }
  }, [state.comparing]);

  return (
    <CompareDataContext.Provider value={value}>
      {props.children}
    </CompareDataContext.Provider>
  );
};

export const useCompareData = () => {
  const context = useContext(CompareDataContext);
  if (context === undefined) {
    throw new Error(
      'useCompareData must be used within an CompareDataProvider'
    );
  }
  return context;
};
