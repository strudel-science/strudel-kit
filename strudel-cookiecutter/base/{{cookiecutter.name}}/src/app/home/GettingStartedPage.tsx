import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { TopBar } from '../../components/TopBar';

export const GettingStartedPage: React.FC = () => {
  return (
    <Box>
      <TopBar />
      <Container
        maxWidth="md"
        sx={{ "{{" }}
          marginTop: 3,
          marginBottom: 3,
        {{ "}}" }}
      >
        <Paper
          sx={{ "{{" }}
            padding: 2
          {{ "}}" }}
        >
          Welcome to your STRUDEL app!
        </Paper>
      </Container>
    </Box>
  )
}