import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormGroupProps, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type CheckboxOptionValue = string | number;

export interface CheckboxOption {
  label: string;
  value: CheckboxOptionValue;
}

interface CheckboxListProps extends Omit<FormGroupProps, 'onChange'> {
  options: CheckboxOption[];
  onChange?: (values: CheckboxOptionValue[] | null) => any;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({
  options = [],
  onChange,
  ...rest
}) => {
  const [values, setValues] = useState<CheckboxOptionValue[] | null>(null);
  
  const handleChange = (checked: boolean, value: CheckboxOption['value']) => {
    if (values === null && checked) {
      setValues([value]);
    } else if (values !== null && checked) {
      setValues([...values, value]);
    } else if (values !== null && !checked) {
      const newValues = values.filter((v) => v !== value);
      if (newValues.length > 0) {
        setValues(newValues);
      } else {
        setValues(null);
      }
    }
  };

  useEffect(() => {
    if (onChange) onChange(values);
  }, [values]);

  return (
    <FormGroup {...rest}>
      {options.map((option, i) => (
        <FormControlLabel
          key={`${option}-${i}`}
          label={option.label}
          control={
            <Checkbox 
              value={option.value}
              onChange={(e, checked) => handleChange(checked, option.value)}
              sx={{ '{{' }}
                pr: 1,
                pl: 0,
                pb: 0,
                pt: 0
              {{ '}}' }}
            />
          }
          sx={{ '{{' }}
            '&:not(:last-child)': {
              mb: 1
            }
          {{ '}}' }}
        />
      ))}
    </FormGroup>
  );
}