import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Collapsible, CollapsibleProps } from './Collapsible';

interface FilterGroupProps extends CollapsibleProps {
  isCollapsible?: boolean;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  label,
  isCollapsible,
  children,
  ...rest
}) => {
  const defaultLabel = (
    <Typography 
      color="black"
      sx={{
        fontWeight: 'medium'
      }}
    >
      {label}
    </Typography>
  );
  const labelComponent = typeof label === 'string' ? defaultLabel : label;

  return (
    <>
      {isCollapsible ? (
        <Collapsible
          {...rest}
          color="black"
          label={labelComponent}
        >
          <Stack pl={2}>
            {children}
          </Stack>
        </Collapsible>
      ): (
        <Stack spacing={1} {...rest}>
          {labelComponent}
          <Stack pl={2}>
            {children}
          </Stack>
        </Stack>
      )}
    </>

  )
}