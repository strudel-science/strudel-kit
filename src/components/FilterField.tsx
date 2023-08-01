import React, { ReactNode, useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CheckboxList } from './CheckboxList';
import { useAnalytics } from './Analytics/AnalyticsProvider';
import { Collapsible } from './Collapsible';

enum FilterType {
  CHECKBOX_LIST = 'CHECKBOX_LIST',
  RANGE_SLIDER = 'RANGE_SLIDER',
}

interface Filter {
  label: string;
  field: string;
  type: FilterType;
  defaultValue: any;
}

interface FilterFieldProps extends BoxProps {
  label: string;
  filter: ReactNode
}

export const FilterField: React.FC<FilterFieldProps> = (props) => { 
  return (
    <Collapsible 
      label={<Typography>{props.label}</Typography>}
    >
      <Box ml={2}>
        {props.filter}
      </Box>
    </Collapsible>
  )
}