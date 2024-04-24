import { Box, Button, Container, FormControl, Grid, Link, MenuItem, Paper, Select, Stack, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { taskflow } from '../_config/taskflow.config';

/**
 * Page to configure settings for a computational run.
 * Completing and submitting the form takes users to the 
 * `<RunningComputation>` component.
 */
const SettingsPage: React.FC = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleAdvancedToggle = () => {
    setShowAdvanced(!showAdvanced);
  };

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
        <Paper sx={{ padding: 3 }}>
          <Stack>
            <Typography variant="h6" component="h2">
              {taskflow.pages.settings.title}
            </Typography>
            <Grid container rowSpacing={2} alignItems="center">
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
                <TextField id="time-constraints-field" variant="outlined" fullWidth />
              </Grid>
            </Grid>
            <Box>
              <Button onClick={handleAdvancedToggle}>{showAdvanced ? 'Hide' : 'Show'} advanced settings</Button>
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
              <Link component={RouterLink} to="../running">
                <Button variant="contained" sx={{ marginTop: 4 }}>
                  Run {taskflow.properties.itemName}
                </Button>
              </Link>
            </Box>
          </Stack>
        </Paper>  
      </Container>
    </Stack>
  )
}

export default SettingsPage;