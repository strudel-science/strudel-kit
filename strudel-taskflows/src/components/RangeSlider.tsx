import React, { useState } from 'react';
import { Box, Slider, SliderProps } from '@mui/material';

interface RangeSliderProps extends SliderProps {

}

/**
 * Custom wrapper for the MUI Slider components where
 * the user is selecting a range of values.
 */
export const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  ...rest
}) => {
  const [value, setValue] = useState<number[]>([min, max]);

  const handleChange = (event: Event, value: number | number[], activeThumb: number) => {
    setValue(value as number[])
  }

  const marks = [
    {
      value: min,
      label: min,
    },
    {
      value: max,
      label: max,
    }
  ];
  
  return (
    <Box
      sx={{
        paddingLeft: 1,
        paddingRight: 1,
      }}
    >
      <Slider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        marks={marks}
        {...rest}
      />
    </Box>
  )
}