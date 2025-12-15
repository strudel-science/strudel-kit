import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { PropsWithChildren } from 'react';
import { router } from '../App';
import { AppLink } from '../components/AppLink';
import {
  getNameFromPath,
  getTopLevelRoutes,
  getTaskFlowRoutes,
} from '../utils/string.utils';
import { ImageWrapper } from '../components/ImageWrapper';

export const Route = createFileRoute('/')({
  component: Index,
});

/**
 * Home page component that renders at the root route /
 */
function Index() {
  const topLevelRoutes = getTopLevelRoutes(router.flatRoutes);
  const taskflowRoutes = getTaskFlowRoutes(router.flatRoutes);

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
    <Box>
      <Box
        sx={{
          backgroundColor: 'grey.200',
          height: '250px',
        }}
      >
        <Container maxWidth="lg" sx={{ height: '100%' }}>
          <Stack alignItems="center" justifyContent="center" height="100%">
            <ImageWrapper height={60}>
              <img src="strudel-logo-icon.png" />
            </ImageWrapper>
            <Typography variant="h6" component="h1">
              You just started an app with STRUDEL!
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <Stack spacing={3}>
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
                          <code>{`/src/pages/index.tsx`}</code>
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
                            <code>{`/src/pages${route.id}index.tsx`}</code>
                          </Typography>
                        </Box>
                      </Stack>
                    </PaperWithHover>
                  </AppLink>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Divider />
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
                              <code>{`/src/pages${route.id}index.tsx`}</code>
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
        </Stack>
      </Container>
    </Box>
  );
}
