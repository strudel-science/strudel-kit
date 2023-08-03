import React, { ReactNode, useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CheckboxList } from './CheckboxList';
import { useAnalytics } from './contexts/analytics/AnalyticsProvider';
import { Collapsible } from './Collapsible';

enum FilterType {
  CHECKBOX_LIST = 'CHECKBOX_LIST',
  RANGE_SLIDER = 'RANGE_SLIDER',
}

interface FilterFieldProps extends BoxProps {
  label: ReactNode;
  filter: ReactNode;
  isCollapsible?: boolean;
}

export const FilterField: React.FC<FilterFieldProps> = (props) => {
  const defaultLabel = (
    <Typography 
      variant="body2" 
      color="neutral.dark"
    >
      {props.label}
    </Typography>
  );
  const label = typeof props.label === 'string' ? defaultLabel : props.label;
  
  return (
    <>
      {props.isCollapsible ? (
        <Collapsible
          {...props}
          color="neutral.dark"
          label={label}
          sx={{
            '&:not(:last-child)': {
              mb: 2
            }
          }}
        >
          <Box ml={2}>
            {props.filter}
          </Box>
        </Collapsible>
      ): (
        <Box 
          {...props}
          sx={{
            '&:not(:last-child)': {
              mb: 2
            }
          }}
        >
          {label}
          <Box ml={2} mt={1}>
            {props.filter}
          </Box>
        </Box>
      )}
    </>
  )
}