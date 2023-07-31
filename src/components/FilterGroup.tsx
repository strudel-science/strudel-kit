import React, { useEffect, useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CheckboxList } from './CheckboxList';
import { useAnalytics } from './Analytics/AnalyticsProvider';

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

interface FilterGroupProps extends BoxProps {
  name: string;
  isOpen?: boolean;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({ 
  name,
  children,
  isOpen = false,
  ...rest
}) => {
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen);

  const handleClick = () => {
    setIsOpenState(!isOpenState);
  }

  useEffect(() => {
    setIsOpenState(isOpen);
  }, [isOpen]);

  return (
    <Box {...rest}>
      <Button
        color='neutral'
        onClick={handleClick}
        sx={{
          display: 'block',
          p: 0,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%'
        }}
      >
        <Stack direction="row" alignItems="center">
          {!isOpenState && <ArrowRightIcon fontSize="large" />}
          {isOpenState && <ArrowDropDownIcon fontSize="large" />}
          <Typography flex={1}>{name}</Typography>
        </Stack>
      </Button>
      {isOpenState && (
        <Box>
          {children}
        </Box>
      )}
    </Box>
  )
}