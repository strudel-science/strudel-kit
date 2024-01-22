import { Box, Button, Grid, TextField, TextFieldProps, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import React from 'react';
import { useAnalytics } from './AnalyticsProvider';
import { setSearch } from './actions';

export const AnalyticsSearchField: React.FC<TextFieldProps> = ({
  variant = 'outlined',
  label = 'Search',
  size = 'small',
  ...otherProps
}) => {
  const {state, dispatch} = useAnalytics();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setSearch(evt.target.value));
  };

  return (
    <TextField 
      variant={variant}
      label={label} 
      size={size}
      {...otherProps}
      onChange={handleChange}
    />
  )
}