import React from 'react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { TopBar } from '../components/TopBar';
import { routes } from '@generouted/react-router';
import { AppLink } from '../components/AppLink';

/**
 * TODO:
 * - Add instructions about how to rig up the router for task flows
 * - Add instructions for putting dataset into app
 */
const HomePage: React.FC = () => {
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
        <Stack>
          <Paper
            sx={{
              padding: 2
            }}
          >
            <Typography variant="h5" component="h1" fontWeight="bold">Welcome to your app built with STRUDEL!</Typography>
          </Paper>
          <Paper
            sx={{
              padding: 2
            }}
          >
            <Stack>
              <Typography variant="h6">Registered Pages</Typography>
              {routes[0].children?.map((route) => {
                if (route.path !== '/' && route.path !== '*') {
                  return (
                    <Box key={route.path}>
                      <AppLink to={route.path || ''}>{route.path}</AppLink>
                    </Box>
                  )
                }
              })}
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}

export default HomePage;