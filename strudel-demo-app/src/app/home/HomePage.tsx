import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { TopBar } from '../../components/TopBar';
import { routes } from '@generouted/react-router'
import { AppLink } from '../../components/AppLink';

/**
 * TODO:
 * - Add instructions about how to rig up the router for task flows
 * - Add instructions for putting dataset into app
 */
export const HomePage: React.FC = () => {
  console.log(routes);
  console.log('blob');
  return (
    <Box>
      <TopBar />
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
          Welcome to your app built with STRUDEL!
        </Paper>
        <Paper>
          {routes[0].children?.map((route) => (
            <AppLink to={route.path || ''}>{route.path}</AppLink>
          ))}
        </Paper>
      </Container>
    </Box>
  )
}