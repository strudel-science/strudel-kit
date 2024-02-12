import React, { PropsWithChildren } from 'react';
import { Container, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

/**
 * TODO:
 * - Add instructions about how to rig up the router for task flows
 * - Add instructions for putting dataset into app
 */
export const GettingStartedPage: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      <Paper
        sx={{
          padding: 2
        }}
      >
        Welcome to your STRUDEL app!
      </Paper>
    </Container>
  )
}