import React, { ReactNode, useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, StackProps, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CheckboxList } from './CheckboxList';
import { useAnalytics } from './contexts/analytics/AnalyticsProvider';
import { Collapsible } from './Collapsible';

enum FilterType {
  CHECKBOX_LIST = 'CHECKBOX_LIST',
  RANGE_SLIDER = 'RANGE_SLIDER',
}

interface FilterFieldProps extends StackProps {
  label: ReactNode;
  filter: ReactNode;
  isCollapsible?: boolean;
}

export const FilterField: React.FC<FilterFieldProps> = ({
  label,
  filter,
  isCollapsible,
  ...rest
}) => {
  const defaultLabel = (
    <Typography color="black">
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