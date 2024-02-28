import React, { ReactNode } from 'react';
import { Table, TableBody, TableCell, TableProps, TableRow } from '@mui/material';

interface LabelValuePair {
  label: ReactNode;
  value: ReactNode;
}

export interface LabelValueTableProps extends TableProps {
  rows?: LabelValuePair[];
  labelWidth?: number;
}

/**
 * Component for displaying a flat list of label-value pairs
 * in a two column table.
 */
export const LabelValueTable: React.FC<LabelValueTableProps> = ({
  rows,
  labelWidth = 150,
  ...rest
}) => {
  return (
    <Table 
      size="small"
      aria-label="label value table"
      {...rest}
    >
      <TableBody>
        {rows?.map((row, i) => (
          <TableRow
            key={`${row.label}-${i}`}
            sx={{ border: 0 }}
          >
            <TableCell
              width={labelWidth}
              component="th" 
              scope="row" 
              sx={{ 
                border: 0,
                color: 'neutral.dark',
                pl: 0
              }}
            >
              {row.label}
            </TableCell>
            <TableCell 
              align="left" 
              sx={{ 
                border: 0,
                pl: 0
              }}
            >
              {row.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}