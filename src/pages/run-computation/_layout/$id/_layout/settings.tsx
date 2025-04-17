import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { AppLink } from '../../../../../components/AppLink';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/run-computation/_layout/$id/_layout/settings'
)({
  component: SettingsPage,
});

/**
 * Page to configure settings for a computational run.
 * Completing and submitting the form takes users to the
 * `<RunningComputation>` component.
 */
function SettingsPage() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleAdvancedToggle = () => {
    setShowAdvanced(!showAdvanced);
  };

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
        <Paper sx={{ padding: 3 }}>
          <Stack>
            <Typography variant="h6" component="h2">
              {/* CUSTOMIZE: settings page title */}
              Optimization Settings
            </Typography>
            <Grid container rowSpacing={2} alignItems="center">
              {/* CUSTOMIZE: settings form elements */}
              <Grid item md={3}>
                <Typography>Solver</Typography>
              </Grid>
              <Grid item md={9}>
                <FormControl fullWidth>
                  <Select id="solver-select">
                    <MenuItem value={10}>Solver 1</MenuItem>
                    <MenuItem value={20}>Solver 2</MenuItem>
                    <MenuItem value={30}>Solver 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={3}>
                <Typography>Objective</Typography>
              </Grid>
              <Grid item md={9}>
                <FormControl fullWidth>
                  <Select id="objective-select">
                    <MenuItem value={10}>Objective 1</MenuItem>
                    <MenuItem value={20}>Objective 2</MenuItem>
                    <MenuItem value={30}>Objective 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={3}>
                <Typography>Time Constraints</Typography>
              </Grid>
              <Grid item md={9}>
                <TextField
                  id="time-constraints-field"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Box>
              <Button onClick={handleAdvancedToggle}>
                {showAdvanced ? 'Hide' : 'Show'} advanced settings
              </Button>
            </Box>
            {showAdvanced && (
              <Grid container rowSpacing={2} alignItems="center">
                <Grid item md={3}>
                  <Typography>Another Setting</Typography>
                </Grid>
                <Grid item md={9}>
                  <FormControl fullWidth>
                    <Select id="another-select">
                      <MenuItem value={10}>Another Setting 1</MenuItem>
                      <MenuItem value={20}>Another Setting 2</MenuItem>
                      <MenuItem value={30}>Another Setting 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={3}>
                  <Typography>Another Setting</Typography>
                </Grid>
                <Grid item md={9}>
                  <FormControl fullWidth>
                    <Select id="another-2-select">
                      <MenuItem value={10}>Another Setting 1</MenuItem>
                      <MenuItem value={20}>Another Setting 2</MenuItem>
                      <MenuItem value={30}>Another Setting 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            )}
            <Box textAlign="right">
              <AppLink to="/run-computation/$id/running" params={{ id: 'new' }}>
                {/* CUSTOMIZE: run button */}
                <Button
                  variant="contained"
                  data-testid="rnc-run-button"
                  sx={{ marginTop: 4 }}
                >
                  Run Scenario
                </Button>
              </AppLink>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Stack>
  );
}
