import { Box, Button, Container, LinearProgress, Link, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useInterval } from '../../utils/useInterval';

/**
 * Page to show while a computation is running and after it completes.
 * Continuing after completion, this page takes users to the `<Results>` page.
 */
export const RunningComputation: React.FC = () => {
  const [running, setRunning] = useState(true);
  const [progress, setProgress] = useState(0);

  /**
   * Simulate the time it takes to run the optimization
   */
  useInterval(() => {
    if (progress < 100) {
      setProgress(progress + 10);
    } else {
      setRunning(false);
    }
  }, 500);

  /**
   * Content to render on the page for this component
   */
  return (
    <Stack spacing={0} flex={1}>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 2,
          borderBottom: '1px solid',
          borderColor: 'neutral.main'
        }}
      >
        <Stepper activeStep={1} sx={{ maxWidth: 850 }}>
          <Step key="Data Inputs">
            <StepLabel>
              <Link component={RouterLink} to="../data-inputs" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {/* strudel-kit-variable-next-line */}
                Data Inputs
              </Link>
            </StepLabel>
          </Step>
          <Step key="Optimization Settings">
            <StepLabel>
              <Link component={RouterLink} to="../settings" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {/* strudel-kit-variable-next-line */}
                Optimization Settings
              </Link>
            </StepLabel>
          </Step>
          <Step key="Results">
            <StepLabel>
              <Link component={RouterLink} to="../results" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {/* strudel-kit-variable-next-line */}
                Results
              </Link>
            </StepLabel>
          </Step>
        </Stepper>
      </Box>
      <Container
        maxWidth="md"
        sx={{
          mt: 4
        }}
      >
        <Paper sx={{ padding: 6, textAlign: 'center' }}>
          {running && (
            <Stack spacing={6}>
              <Typography variant="h6" component="h2">
                Running Optimization
              </Typography>
              <Box color="neutral.dark">
                <Typography>This could take several minutes.</Typography>
                <Typography>You may leave this page and return later. Your progress will not be affected.</Typography>
              </Box>
              <LinearProgress variant="determinate" value={progress} sx={{ height: 10 }} />
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
              <Link component={RouterLink} to="../results">
                <Button variant="contained" size="large">Continue to Results</Button>
              </Link>
              <Typography color="neutral.dark">
                Started 05/24/2023 9:32:33 AM, Ended 05/24/2023 11:47:03 AM
              </Typography>
            </Stack>
          )}
        </Paper>  
      </Container>
    </Stack>
  )
}