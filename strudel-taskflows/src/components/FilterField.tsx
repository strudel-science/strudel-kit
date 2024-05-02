import React, { ReactNode } from 'react';
import { Box, Stack, StackProps, Typography } from '@mui/material';
import { Collapsible } from './Collapsible';

interface FilterFieldProps extends StackProps {
  label: ReactNode;
  filter: ReactNode;
  isCollapsible?: boolean;
}

export const FilterField: React.FC<FilterFieldProps> = ({
  label,
  filter,
  isCollapsible,
  color,
  ...rest
}) => {
  const defaultLabel = (
    <Typography>
      {label}
    </Typography>
  );
  const labelComponent = typeof label === 'string' ? defaultLabel : label;
  
  return (
    <>
      {isCollapsible ? (
        <Collapsible
          {...rest}
          label={labelComponent}
        >
          <Box pl={4}>
            {filter}
          </Box>
        </Collapsible>
      ): (
        <Stack spacing={1} {...rest}>
          {labelComponent}
          <Box>
            {filter}
          </Box>
        </Stack>
      )}
    </>
  )
}