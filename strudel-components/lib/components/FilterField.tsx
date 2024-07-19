import React, { ReactNode } from 'react';
import { Box, Stack, StackProps, Typography } from '@mui/material';

interface FilterFieldProps extends StackProps {
  label: ReactNode;
  filter: ReactNode;
}

export const FilterField: React.FC<FilterFieldProps> = ({
  label,
  filter,
  color,
  ...rest
}) => {
  const defaultLabel = (
    <Typography fontWeight="bold">
      {label}
    </Typography>
  );
  const labelComponent = typeof label === 'string' ? defaultLabel : label;
  
  return (
    <Stack 
      spacing={1}
      sx={{
        paddingBottom: 2,
        borderBottom: '1px solid',
        borderBottomColor: 'grey.300',
        '&:last-child': {
          borderBottom: 'none',
          paddingBottom: 0,
        }
      }}
      {...rest}
    >
      {labelComponent}
      <Box>
        {filter}
      </Box>
    </Stack>
  )
}