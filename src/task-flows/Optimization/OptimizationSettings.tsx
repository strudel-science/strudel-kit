import { AppBar, Box, Button, Container, FormControl, Grid, IconButton, InputLabel, Link, MenuItem, Paper, Select, Stack, Step, StepLabel, Stepper, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { setPreviewItem } from '../../components/contexts/analytics/actions';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { DataGrid } from '../../components/DataGrid';
import { NewScenarioModal } from './NewScenarioModal';

export const OptimizationSettings: React.FC = () => {
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
          borderColor: 'neutral.main'
        }}
      >
        <Stepper activeStep={1} sx={{ maxWidth: 850 }}>
          <Step key="Data Inputs">
            <StepLabel>Data Inputs</StepLabel>
          </Step>
          <Step key="Optimization Settings">
            <StepLabel>Optimization Settings</StepLabel>
          </Step>
          <Step key="Results">
            <StepLabel>Results</StepLabel>
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
              Optimization Settings
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
              <Link component={RouterLink} to="/optimization/scenario/loading">
                <Button variant="contained" sx={{ marginTop: 4 }}>
                  Run optimization
                </Button>
              </Link>
            </Box>
          </Stack>
        </Paper>  
      </Container>
    </Stack>
  )
}