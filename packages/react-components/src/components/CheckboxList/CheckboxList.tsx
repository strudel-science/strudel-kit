import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormGroupProps,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

export type CheckboxOptionValue = string | number;

export interface CheckboxOption {
  label: string;
  value: CheckboxOptionValue;
}

interface CheckboxListProps extends Omit<FormGroupProps, 'onChange'> {
  values: CheckboxOptionValue[] | null;
  options: CheckboxOption[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (values: CheckboxOptionValue[] | null) => any;
}

/**
 * Generate a list of checkboxes from an array of options
 * and control the selected values as an array.
 */
export const CheckboxList: React.FC<CheckboxListProps> = ({
  options = [],
  onChange,
  values,
  sx,
  ...rest
}) => {
  const [checkValues, setCheckValues] = useState<CheckboxOptionValue[] | null>(
    values
  );

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkValues]);

  useEffect(() => {
    setCheckValues(values);
  }, [values]);

  return (
    <FormGroup
      sx={{
        display: 'inline-flex',
        ...sx,
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
              onChange={(_e, checked) => handleChange(checked, option.value)}
              sx={{
                pr: 1,
                pl: 1,
                pb: 0,
                pt: 0,
              }}
            />
          }
          sx={{
            '&:not(:last-child)': {
              mb: 1,
            },
          }}
        />
      ))}
    </FormGroup>
  );
};
