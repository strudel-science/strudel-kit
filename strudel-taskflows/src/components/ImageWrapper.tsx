import { Box, BoxProps } from '@mui/material';
import React from 'react';
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
  sx,
  children,
  ...rest
}) => {
  return (
    <Box
      {...rest}
      sx={{
        ...sx,
        height: height || 'auto',
        overflow: 'hidden',
        width: width || 'auto',
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const imgClass = width ? 'relative-width' : 'relative-height';
          return React.cloneElement(child as React.ReactElement<any>, {
            className: `${child.props.className} ${imgClass}`,
          });
        }
      })}
    </Box>
  );
};
