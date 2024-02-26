import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';
import './ImageWrapper.css';

interface ImageWrapperProps extends BoxProps {
  height?: string | number;
  width?: string | number;
}

/**
 * Generic image wrapper component for sizing images relatively
 * based on container sizes. Provide either a height or width and 
 * the image will size to that value and maintain its aspect ratio.
 */
export const ImageWrapper: React.FC<ImageWrapperProps> = ({
  height,
  width,
  children,
  ...rest
}) => {
  return (
    <Box
      sx={{
        height: height || 'auto',
        width: width || 'auto',
      }}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const imgClass = width ? 'relative-width' : 'relative-height';
          return React.cloneElement(child as React.ReactElement<any>, { className: `${child.props.className} ${imgClass}` });
        }
      })}
    </Box>
  );
}