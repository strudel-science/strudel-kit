import { Box, Button, Container, LinearProgress, Link, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { taskflow } from '../_config/taskflow.config';

/**
 * Page to show while a computation is running and after it completes.
 * Continuing after completion, this page takes users to the `<Results>` page.
 */
const RunningComputationPage: React.FC = () => {
  const [running, setRunning] = useState(true);

  /**
   * Simulate the time it takes to run the optimization
   */
  useEffect(() => {
    setTimeout(() => {
      setRunning(false);
    }, 2000)
  })

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
          <Step key={taskflow.pages.dataInputs.title}>
            <StepLabel>
              <Link component={RouterLink} to="../data-inputs" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {taskflow.pages.dataInputs.title}
              </Link>
            </StepLabel>
          </Step>
          <Step key={taskflow.pages.settings.title}>
            <StepLabel>
              <Link component={RouterLink} to="../settings" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {taskflow.pages.settings.title}
              </Link>
            </StepLabel>
          </Step>
          <Step key={taskflow.pages.results.title}>
            <StepLabel>
              <Link component={RouterLink} to="../results" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {taskflow.pages.results.title}
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

export default RunningComputationPage;