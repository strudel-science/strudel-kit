import React, { ReactNode, useEffect, useState } from 'react';
import { Box, BoxProps, Button, ButtonProps, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
  color?: string;
  label: ReactNode;
  isOpen?: boolean;
  buttonProps?: ButtonProps;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  color,
  label,
  isOpen = false,
  buttonProps,
  children,
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
        disableRipple
        onClick={handleClick}
        sx={{
          color: color,
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
        {...buttonProps}
      >
        <Stack direction="row" alignItems="center">
          {!isOpenState && (
            <KeyboardArrowRightIcon 
              sx={{ 
                ml: '-0.5rem',
                mt: '-0.5rem',
                mb: '-0.5rem'
              }} 
            />
          )}
          {isOpenState && (
            <KeyboardArrowDownIcon 
              sx={{ 
                ml: '-0.5rem',
                mt: '-0.5rem',
                mb: '-0.5rem'
              }} 
            />
          )}
          <Box flex={1}>{label}</Box>
        </Stack>
      </Button>
      {isOpenState && (
        <Box mt={1}>
          {children}
        </Box>
      )}
    </Box>
  )
}