import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

/**
 * Home page component that renders at the root route /
 */
function Index() {
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
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid item md={12}>
            <Stack>
              <Typography variant="h5" component="h2">
                Registered Pages
              </Typography>
              <Typography>
                Below are all of the pages that are registered in your app. As
                you add new top-level pages and Task Flows to your app, they
                will show up here.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Stack>
              <Typography variant="h5" component="h2">
                What's Next?
              </Typography>
              <Typography variant="h6" component="h3">
                Add Task Flows
              </Typography>
              <Paper elevation={0} sx={{ padding: 2 }}>
                <code>strudel add-taskflow my-taskflow -t explore-data</code>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
