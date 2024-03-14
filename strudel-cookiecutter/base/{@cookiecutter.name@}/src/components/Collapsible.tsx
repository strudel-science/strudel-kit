import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Stack, StackProps } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface CollapsibleProps extends StackProps {
  color?: string;
  label: ReactNode;
  isOpen?: boolean;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  color,
  label,
  isOpen = false,
  children,
  ...rest
}) => {
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen);

  const handleClick = () => {
    setIsOpenState(!isOpenState);
  }

  useEffect(() => {
    setIsOpenState(isOpen);
  }, [isOpen]);

  return (
    <Stack spacing={1} {...rest}>
      <Box
        role="button"
        onClick={handleClick}
        sx={{
          cursor: 'pointer',
          display: 'block',
          padding: 0,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%',
          '&:hover': {
            background: 'none',
            opacity: 0.7
          }
        }}
      >
        <Stack spacing={1} direction="row" alignItems="center">
          {!isOpenState && (
            <KeyboardArrowRightIcon 
              sx={{ 
                ml: '-0.5rem',
                mt: '-0.5rem',
                mb: '-0.5rem'
              }} 
            />
          )}
          {isOpenState && (
            <KeyboardArrowDownIcon 
              sx={{ 
                ml: '-0.5rem',
                mt: '-0.5rem',
                mb: '-0.5rem'
              }} 
            />
          )}
          <Box flex={1}>{label}</Box>
        </Stack>
      </Box>
      {isOpenState && (
        <Box>
          {children}
        </Box>
      )}
    </Stack>
  )
}