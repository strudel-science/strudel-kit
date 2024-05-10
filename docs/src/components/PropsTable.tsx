import React, { ReactNode } from 'react';
import { Table, TableBody, TableCell, TableProps, TableRow } from '@mui/material';

export interface PropsTableProps {
  propsData: any
}

/**
 * Component for displaying a flat list of label-value pairs
 * in a two column table.
 */
export const PropsTable: React.FC<PropsTableProps> = ({
  propsData
}) => {
  return (
    <Table 
      size="small"
      aria-label="label value table"
      sx={{
        color: 'white' 
      }}
    >
      <TableBody>
        <TableRow>
          <TableCell>
            Name
          </TableCell>
          <TableCell>
            Description
          </TableCell>
          <TableCell>
            Type
          </TableCell>
          <TableCell>
            Required
          </TableCell>
        </TableRow>
        {Object.keys(propsData).map((prop, i) => (
          <TableRow key={`${prop}-${i}`}>
            <TableCell>
              {prop}
            </TableCell>
            <TableCell>
              {propsData[prop].description}
            </TableCell>
            <TableCell>
              {propsData[prop].tsType.name}
            </TableCell>
            <TableCell>
              {JSON.stringify(propsData[prop].required)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}