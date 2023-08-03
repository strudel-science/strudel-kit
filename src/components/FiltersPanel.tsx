import React, { useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CheckboxList } from './CheckboxList';
import { useAnalytics } from './contexts/analytics/AnalyticsProvider';

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

interface FilterPanelProps extends BoxProps {
  filters?: Filter[];
  onChange?: () => any;
  onClose?: () => any;
}

const initFilterValues = (filters: Filter[]) => {
  const filterValues: any = {};
  filters.forEach((filter) => {
    filterValues[filter.field] = filter.defaultValue;
  })
};

export const FiltersPanel: React.FC<FilterPanelProps> = ({ 
  onClose,
  children,
  ...rest
}) => { 
  return (
    <Box {...rest}>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6" component="h2" flex={1}>FILTERS</Typography>
        <IconButton onClick={onClose}><CloseIcon /></IconButton>
      </Stack>
      <Box>
        {children}
      </Box>
    </Box>
  )
}