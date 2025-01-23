import { Box, Typography } from '@mui/material';
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import React, { ReactNode } from 'react';
import { ArrayWithPopover } from './ArrayWithPopover';
import { CellWithPopover } from './CellWithPopover';
import { hasValue } from './FilterField';
import { Formula } from './Formula';

export type SciDataGridColDef = GridColDef & {
  units?: string;
  decimals?: number;
  sigFigs?: number;
  isFormula?: boolean;
  hasPopover?: boolean;
};

interface SciDataGridProps extends Omit<DataGridProps, 'columns'> {
  columns: SciDataGridColDef[];
}

const CellWrapper: React.FC<{ hasPopover?: boolean; children: ReactNode }> = ({
  hasPopover,
  children,
}) => {
  if (hasPopover) {
    return <CellWithPopover>{children}</CellWithPopover>;
  } else {
    return children;
  }
};

const getGridColumns = (columns: SciDataGridColDef[]) => {
  return columns.map((column) => {
    const { units, decimals, sigFigs, isFormula, hasPopover, ...gridColumn } =
      column;

    /**
     * Style column header and render unit label
     * underneath the headerName if units supplied
     */
    gridColumn.renderHeader = (params: GridColumnHeaderParams) => (
      <Box>
        <Typography fontSize="0.875rem" fontWeight="bold">
          {params.colDef.headerName}
        </Typography>
        {units && (
          <Typography
            fontSize="small"
            color="grey.700"
            sx={{
              position: 'absolute',
              bottom: '4px',
              left: params.colDef.type !== 'number' ? 0 : 'auto',
              right: params.colDef.type === 'number' ? 0 : 'auto',
              transform: 'translate(0, 0)',
              zIndex: 1000,
            }}
          >
            {units}
          </Typography>
        )}
      </Box>
    );

    /** Handle value transformation options */
    if (!gridColumn.valueFormatter && gridColumn.type === 'number') {
      gridColumn.valueFormatter = (value: number) => {
        /** Empty cells should render as '-' */
        if (!hasValue(value)) {
          return '-';
          /**
           * Round display values to nearest n decimals.
           * Exactly zero should display as just 0.
           * Values that would require more decimals to display
           * a non-zero digit should display "> 0.001" (decimals would be based on decimals value).
           */
        } else if ((!isNaN(value) && decimals) || decimals === 0) {
          if (value === 0) {
            return value;
          } else if (value < 1 / Math.pow(10, decimals)) {
            return `> ${1 / Math.pow(10, decimals)}`;
          } else {
            return value.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            });
          }
          /**
           * Round display values to a certain number of significant figures
           * and convert to scientific notation.
           */
        } else if (!isNaN(value) && sigFigs) {
          return value.toPrecision(sigFigs);
        } else {
          return value.toLocaleString();
        }
      };
    }

    /** Handle value transformation options */
    if (!gridColumn.renderCell) {
      gridColumn.renderCell = (params: GridRenderCellParams) => {
        if (Array.isArray(params.value)) {
          return <ArrayWithPopover values={params.value} />;
        }
        if (isFormula) {
          return (
            <CellWrapper hasPopover={hasPopover}>
              <Formula content={params.value} />
            </CellWrapper>
          );
        } else {
          return (
            <CellWrapper hasPopover={hasPopover}>
              {params.formattedValue}
            </CellWrapper>
          );
        }
      };
    }

    return gridColumn;
  });
};

/**
 * Extension of the MUI DataGrid that adds extra functionality
 * and options for scientific data tables.
 */
export const SciDataGrid: React.FC<SciDataGridProps> = ({
  rows,
  columns,
  ...rest
}) => {
  return (
    <DataGrid
      rows={rows}
      columns={getGridColumns(columns)}
      disableColumnSelector
      initialState={{
        pagination: { paginationModel: { page: 0, pageSize: 5 } },
      }}
      sx={{
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'bold',
        },
        '& .MuiDataGrid-cell:focus-within': {
          outline: 'none',
        },
        '& .MuiDataGrid-overlayWrapper': {
          minHeight: '4rem',
        },
      }}
      {...rest}
    />
  );
};
