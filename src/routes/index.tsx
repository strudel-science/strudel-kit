import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { PropsWithChildren } from 'react';
import { router } from '../App';
import { AppLink } from '../components/AppLink';
import {
  getSubRoutes,
  getNameFromPath,
  getTopLevelRoutes,
} from '../utils/string.utils';

export const Route = createFileRoute('/')({
  component: Index,
});

/**
 * Home page component that renders at the root route /
 */
function Index() {
  const topLevelRoutes = getTopLevelRoutes(router.flatRoutes);
  const taskflowRoutes = getSubRoutes(router.flatRoutes, 'task-flows');
  const exampleRoutes = getSubRoutes(router.flatRoutes, 'examples');

  const PaperWithHover: React.FC<PropsWithChildren> = ({ children }) => (
    <Paper
      sx={{
        padding: 2,
        transition: '0.25s',
        '&:hover': {
          backgroundColor: 'grey.200',
        },
      }}
    >
      {children}
    </Paper>
  );

  return (
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
            marginBottom: 4,
          }}
        >
          <Typography variant="h6" component="h1" fontWeight="bold">
            You just built an app with STRUDEL!
          </Typography>
        </Stack>
        <Stack spacing={3}>
          <Typography variant="h4" component="h2">
            Top Level Pages
          </Typography>
          <Box>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <AppLink to="/">
                  <PaperWithHover>
                    <Stack>
                      <Typography
                        variant="h5"
                        component="h3"
                        fontWeight="bold"
                        color="primary.main"
                      >
                        Home
                      </Typography>
                      <Box>
                        <Typography fontSize="small">
                          <code>{`/src/routes/index.tsx`}</code>
                        </Typography>
                      </Box>
                    </Stack>
                  </PaperWithHover>
                </AppLink>
              </Grid>
              {topLevelRoutes.map((route) => (
                <Grid key={route.id} item sm={6}>
                  <AppLink to={route.fullPath}>
                    <PaperWithHover>
                      <Stack>
                        <Typography
                          variant="h5"
                          component="h3"
                          fontWeight="bold"
                          color="primary.main"
                        >
                          {getNameFromPath(route.fullPath)}
                        </Typography>
                        <Box>
                          <Typography fontSize="small">
                            <code>{`/src/routes${route.id}index.tsx`}</code>
                          </Typography>
                        </Box>
                      </Stack>
                    </PaperWithHover>
                  </AppLink>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Typography variant="h4" component="h2">
            Task Flow Templates
          </Typography>
          <Box>
            {taskflowRoutes.length > 0 && (
              <Grid container spacing={1}>
                {taskflowRoutes.map((route) => (
                  <Grid key={route.id} item sm={6}>
                    <AppLink to={route.fullPath}>
                      <PaperWithHover>
                        <Stack>
                          <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            color="primary.main"
                          >
                            {getNameFromPath(route.fullPath)}
                          </Typography>
                          <Box>
                            <Typography fontSize="small">
                              <code>{`/src/routes${route.id}index.tsx`}</code>
                            </Typography>
                          </Box>
                        </Stack>
                      </PaperWithHover>
                    </AppLink>
                  </Grid>
                ))}
              </Grid>
            )}
            {taskflowRoutes.length === 0 && (
              <Typography>No Task Flows configured in your app.</Typography>
            )}
          </Box>
          <Typography variant="h4" component="h2">
            Examples
          </Typography>
          <Box>
            {exampleRoutes.length > 0 && (
              <Grid container spacing={1}>
                {taskflowRoutes.map((route) => (
                  <Grid key={route.id} item sm={6}>
                    <AppLink to={route.fullPath}>
                      <PaperWithHover>
                        <Stack>
                          <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            color="primary.main"
                          >
                            {getNameFromPath(route.fullPath)}
                          </Typography>
                          <Box>
                            <Typography fontSize="small">
                              <code>{`/src/routes${route.id}index.tsx`}</code>
                            </Typography>
                          </Box>
                        </Stack>
                      </PaperWithHover>
                    </AppLink>
                  </Grid>
                ))}
              </Grid>
            )}
            {exampleRoutes.length === 0 && (
              <Typography>No examples configured in your app.</Typography>
            )}
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
