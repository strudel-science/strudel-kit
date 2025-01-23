import React, { useState } from 'react';
import { Slider, SliderProps } from '@mui/material';

interface StrudelSliderProps extends SliderProps {}

/**
 * Custom wrapper for the MUI Slider component.
 * Enables advanced features such as value debounce.
 */
export const StrudelSlider: React.FC<StrudelSliderProps> = ({
  min = 0,
  max = 100,
  ...rest
}) => {
  const [value, setValue] = useState<number[]>([min, max]);

  const handleChange = (event: Event, v: number | number[]) => {
    setValue(v as number[]);
  };

  const marks = [
    {
      value: min,
      label: min,
    },
    {
      value: max,
      label: max,
    },
  ];

  return (
    <Slider
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      marks={marks}
      {...rest}
    />
  );
};
