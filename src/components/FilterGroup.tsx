import React, { useEffect, useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { Collapsible, CollapsibleProps } from './Collapsible';

interface FilterGroupProps extends CollapsibleProps {
  isCollapsible?: boolean;
}

export const FilterGroup: React.FC<FilterGroupProps> = (props) => {
  const defaultLabel = (
    <Typography 
      color="neutral.dark"
      sx={{
        fontWeight: 'medium'
      }}
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
          <Box ml={2} mt={2}>
            {props.children}
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
          <Box ml={2} mt={2}>
            {props.children}
          </Box>
        </Box>
      )}
    </>

  )
}