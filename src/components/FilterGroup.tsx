import React, { useEffect, useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CheckboxList } from './CheckboxList';
import { useAnalytics } from './Analytics/AnalyticsProvider';
import { Collapsible, CollapsibleProps } from './Collapsible';

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

interface FilterGroupProps extends CollapsibleProps {
  name: string;
}

export const FilterGroup: React.FC<CollapsibleProps> = ({ 
  isOpen = false,
  ...rest
}) => {
  const props = { isOpen, ...rest };
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen);

  const handleClick = () => {
    setIsOpenState(!isOpenState);
  }

  useEffect(() => {
    setIsOpenState(isOpen);
  }, [isOpen]);

  return (
    <Collapsible {...props} />
  )
}