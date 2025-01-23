import { Box, Stack } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { TopBar } from './TopBar';

/**
 * Basic layout with navbar and footer
 */
export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack
      sx={{
        height: '100%',
      }}
    >
      <TopBar />
      <Box
        sx={{
          flex: 1,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Stack>
  );
};
