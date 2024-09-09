import { routes } from '@generouted/react-router';
import { Box, Chip, Container, Grid, Paper, Stack, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import { AppLink } from '../components/AppLink';
import { Layout } from '../components/Layout';

/**
 * Home page component that renders at the root route /
 */
const HomePage: React.FC = () => {
  /**
   * Sort routes alphabetically by path
   */
  routes[0].children?.sort((a, b) => {
    const pathA = a.path || '';
    const pathB = b.path || '';

    if ((pathA === 'playground' && pathB !== '/') || pathA < pathB) {
      return -1;
    } else if (pathA > pathB) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <Layout>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <Box>
          <Stack
            sx={{
              marginBottom: 4
            }}
          >
            <Typography variant="h6" component="h1" fontWeight="bold">You just built an app with STRUDEL!</Typography>
            <Box>
              Get started by going to <code><AppLink to="playground">/playground</AppLink></code> and editing <Chip size="small" label={<code>src/pages/playground/index.tsx</code>} />
            </Box>
          </Stack>
          <Grid container columnSpacing={4} rowSpacing={4}>
            <Grid item md={12}>
              <Stack>
                <Typography variant="h5" component="h2">Registered Pages</Typography>
                <Typography>
                  Below are all of the pages that are registered in your app. As you add new top-level pages and Task Flows to your app, they will show up here.
                </Typography>
                <Stack
                  spacing={0}
                  sx={{
                    border: '1px solid',
                    borderColor: 'grey.50',
                    padding: 2
                  }}
                >
                  <Table size="small">
                    <TableBody>
                      {routes[0].children?.map((route) => {
                        if (route.path === '/') {
                          return (
                            <TableRow key={route.path}>
                              <TableCell>
                                <code>
                                  <AppLink to={route.path || ''}>/</AppLink>
                                </code>
                              </TableCell>
                              <TableCell>
                                <code>
                                  <Chip size="small" label={<code>src/pages/index.tsx</code>} />
                                </code>
                              </TableCell>
                            </TableRow>
                          )
                        } else if (route.path !== '*') {
                          return (
                            <TableRow key={route.path}>
                              <TableCell>
                                <code>
                                  <AppLink to={route.path || ''}>/{route.path}</AppLink>
                                </code>
                              </TableCell>
                              <TableCell>
                                <code>
                                  <Chip size="small" label={<code>src/pages/{route.path}/index.tsx</code>} />
                                </code>
                              </TableCell>
                            </TableRow>
                          )
                        }
                      })}
                    </TableBody>
                  </Table>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={12}>
              <Stack>
                <Typography variant="h5" component="h2">What's Next?</Typography>
                <Typography variant="h6" component="h3">Add Task Flows</Typography>
                <Paper elevation={0} sx={{ padding: 2 }}>
                  <code>strudel add-taskflow my-taskflow -t explore-data</code>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export default HomePage;