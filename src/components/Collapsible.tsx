import React, { ReactNode, useEffect, useState } from 'react';
import { Box, BoxProps, Button, ButtonProps, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
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

export interface CollapsibleProps extends BoxProps {
  label: ReactNode;
  isOpen?: boolean;
  buttonProps?: ButtonProps;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ 
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
    <Box {...rest}>
      <Button
        color='neutral'
        disableRipple
        onClick={handleClick}
        sx={{
          color: 'black',
          display: 'block',
          p: 0,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%',
          '&:hover': {
            background: 'none',
            opacity: 0.7
          }
        }}
        {...props.buttonProps}
      >
        <Stack direction="row" alignItems="center">
          {!isOpenState && <ArrowRightIcon fontSize="large" />}
          {isOpenState && <ArrowDropDownIcon fontSize="large" />}
          <Box flex={1}>{props.label}</Box>
        </Stack>
      </Button>
      {isOpenState && (
        <Box>
          {props.children}
        </Box>
      )}
    </Box>
  )
}