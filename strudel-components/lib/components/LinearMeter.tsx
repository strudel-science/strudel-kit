import { LinearProgress, LinearProgressProps, linearProgressClasses } from '@mui/material';
import React from 'react';

/**
 * Styled version of the LinearProgress mui component that can be 
 * used to show one-dimensional data in a horizontal meter.
 */
export const LinearMeter: React.FC<LinearProgressProps> = (props) => {
  return (
    <LinearProgress
      variant="determinate"
      sx={{
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: 'neutral.dark',
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: 'success.light',
        },
      }}
      {...props}
    />
  )
}