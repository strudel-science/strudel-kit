import React, { useState } from 'react';
import { Slider, SliderProps } from '@mui/material';

interface StrudelSliderProps extends SliderProps {

}

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

  const handleChange = (event: Event, value: number | number[], activeThumb: number) => {
    setValue(value as number[])
  }
  
  return (
    <Slider
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      {...rest}
    />
  )
}