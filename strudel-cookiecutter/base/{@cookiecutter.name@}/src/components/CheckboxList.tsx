import { Checkbox, FormControlLabel, FormGroup, FormGroupProps } from '@mui/material';
import React, { useEffect, useState } from 'react';

export type CheckboxOptionValue = string | number;

export interface CheckboxOption {
  label: string;
  value: CheckboxOptionValue;
}

interface CheckboxListProps extends Omit<FormGroupProps, 'onChange'> {
  values: CheckboxOptionValue[] | null;
  options: CheckboxOption[];
  onChange?: (values: CheckboxOptionValue[] | null) => any;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({
  options = [],
  onChange,
  values,
  sx,
  ...rest
}) => {
  const [checkValues, setCheckValues] = useState<CheckboxOptionValue[] | null>(values);
  
  const handleChange = (checked: boolean, value: CheckboxOption['value']) => {
    if (checkValues === null && checked) {
      setCheckValues([value]);
    } else if (checkValues !== null && checked) {
      setCheckValues([...checkValues, value]);
    } else if (checkValues !== null && !checked) {
      const newValues = checkValues.filter((v) => v !== value);
      if (newValues.length > 0) {
        setCheckValues(newValues);
      } else {
        setCheckValues(null);
      }
    }
  };

  useEffect(() => {
    if (onChange && checkValues?.length !== values?.length) {
      onChange(checkValues);
    }
  }, [checkValues]);

  useEffect(() => {
    setCheckValues(values);
  }, [values]);

  return (
    <FormGroup
      sx={{
        display: 'inline-flex',
        ...sx
      }}
      {...rest}
    >
      {options.map((option, i) => (
        <FormControlLabel
          key={`${option}-${i}`}
          label={option.label}
          control={
            <Checkbox
              checked={!!checkValues && checkValues.indexOf(option.value) > -1}
              value={option.value}
              onChange={(e, checked) => handleChange(checked, option.value)}
              sx={{
                pr: 1,
                pl: 1,
                pb: 0,
                pt: 0
              }}
            />
          }
          sx={{
            '&:not(:last-child)': {
              mb: 1
            }
          }}
        />
      ))}
    </FormGroup>
  );
}