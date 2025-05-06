import {
  Box,
  Button,
  Container,
  LinearProgress,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { AppLink } from '../../../../../components/AppLink';

export const Route = createFileRoute(
  '/run-computation/_layout/$id/_layout/running'
)({
  component: RunningComputationPage,
});

/**
 * Page to show while a computation is running and after it completes.
 * Continuing after completion, this page takes users to the `<Results>` page.
 */
function RunningComputationPage() {
  const [running, setRunning] = useState(true);

  /**
   * Simulate the time it takes to run the optimization
   */
  useEffect(() => {
    setTimeout(() => {
      setRunning(false);
    }, 2000);
  });

  return (
    <Stack spacing={0} flex={1}>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 2,
          borderBottom: '1px solid',
          borderColor: 'neutral.main',
        }}
      >
        <Stepper activeStep={1} sx={{ maxWidth: 850 }}>
          <Step key="Data Inputs">
            <StepLabel>
              <AppLink
                to="/run-computation/$id/data-inputs"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Data Inputs
              </AppLink>
            </StepLabel>
          </Step>
          <Step key="Optimization Settings">
            <StepLabel>
              <AppLink
                to="/run-computation/$id/settings"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Optimization Settings
              </AppLink>
            </StepLabel>
          </Step>
          <Step key="Results">
            <StepLabel>
              <AppLink
                to="/run-computation/$id/results"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Results
              </AppLink>
            </StepLabel>
          </Step>
        </Stepper>
      </Box>
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
        }}
      >
        <Paper sx={{ padding: 6, textAlign: 'center' }}>
          {running && (
            <Stack spacing={6}>
              <Typography variant="h6" component="h2">
                {/* CUSTOMIZE: in progress title */}
                Running Optimization
              </Typography>
              <Box color="neutral.dark">
                {/* CUSTOMIZE: in progress description */}
                <Typography>This could take several minutes.</Typography>
                <Typography>
                  You may leave this page and return later. Your progress will
                  not be affected.
                </Typography>
              </Box>
              <LinearProgress variant="indeterminate" sx={{ height: 10 }} />
              <Typography color="neutral.dark">
                Started 05/24/2023 12:32:33
              </Typography>
            </Stack>
          )}
          {!running && (
            <Stack spacing={6}>
              <Typography variant="h6" component="h2">
                Complete
              </Typography>
              <Box color="neutral.dark">
                <Typography>Your results are ready to view.</Typography>
              </Box>
              <AppLink to="/run-computation/$id/results" params={{ id: 'new' }}>
                <Button
                  variant="contained"
                  size="large"
                  data-testid="rnc-results-button"
                >
                  Continue to Results
                </Button>
              </AppLink>
              <Typography color="neutral.dark">
                Started 05/24/2023 9:32:33 AM, Ended 05/24/2023 11:47:03 AM
              </Typography>
            </Stack>
          )}
        </Paper>
      </Container>
    </Stack>
  );
}

export default RunningComputationPage;
