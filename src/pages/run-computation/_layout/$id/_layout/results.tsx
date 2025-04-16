import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import Plot from 'react-plotly.js';
import { AppLink } from '../../../../../components/AppLink';
import { useRunComputation } from '../../../-context/ContextProvider';
import {
  setResultsBarChartData,
  setResultsLineChartData,
  setResultsTableData,
} from '../../../-context/actions';
import { useDataFromSource } from '../../../../../hooks/useDataFromSource';

export const Route = createFileRoute(
  '/run-computation/_layout/$id/_layout/results'
)({
  component: ResultsPage,
});

/**
 * Results page to display after a computation completes in the run-computation Task Flow.
 * Displays a line chart, bar chart, and table of results from the computation.
 */
function ResultsPage() {
  const { state, dispatch } = useRunComputation();
  // CUSTOMIZE: results table data source
  const tableData = useDataFromSource('dummy-data/results_table.json');
  // CUSTOMIZE: results line chart data source
  const lineData = useDataFromSource('dummy-data/results_line_chart.json');
  // CUSTOMIZE: results bar chart data source
  const barData = useDataFromSource('dummy-data/results_bar_chart.json');

  /**
   * Set data for the results table when the data loads
   */
  useEffect(() => {
    if (!state.results.table.data || state.results.table.data.length === 0) {
      dispatch(setResultsTableData(tableData));
    }
  }, [tableData]);

  /**
   * Set data for the results line chart when the data loads
   */
  useEffect(() => {
    if (
      !state.results.lineChart.data ||
      state.results.lineChart.data.length === 0
    ) {
      dispatch(setResultsLineChartData(lineData));
    }
  }, [lineData]);

  /**
   * Set data for the results bar chart when the data loads
   */
  useEffect(() => {
    if (
      !state.results.barChart.data ||
      state.results.barChart.data.length === 0
    ) {
      dispatch(setResultsBarChartData(barData));
    }
  }, [barData]);

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
        <Stepper activeStep={2} sx={{ maxWidth: 850 }}>
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
      <Stack direction="row" spacing={0} flex={1}>
        <Stack
          component="ul"
          direction="column"
          spacing={0}
          sx={{
            backgroundColor: 'white',
            listStyle: 'none',
            margin: 0,
            padding: 4,
            width: 300,
          }}
        >
          <Typography
            component="li"
            fontWeight="bold"
            sx={{
              marginBottom: 2,
            }}
          >
            Categories
          </Typography>
          <Typography
            component="li"
            sx={{
              backgroundColor: '#D9EEFE',
              borderRight: '4px solid',
              borderColor: 'primary.main',
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            Summary
          </Typography>
          <Typography
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            System Costing
          </Typography>
          <Typography
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            System Metrics
          </Typography>
        </Stack>
        <Box flex={1}>
          <Container
            maxWidth="xl"
            sx={{
              mt: 4,
            }}
          >
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <Paper>
                  <Plot data={state.results.lineChart.data} layout={{}} />
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper>
                  <Plot data={state.results.barChart.data} layout={{}} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <DataGrid
                    rows={state.results.table.data || []}
                    getRowId={(row) => row[state.results.table.dataIdField]}
                    columns={state.results.table.columns}
                    disableColumnSelector
                    disableRowSelectionOnClick
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: 'white',
          borderTop: '1px solid',
          borderColor: 'neutral.main',
          bottom: 0,
          padding: 2,
          position: 'fixed',
          width: '100%',
        }}
      >
        <AppLink to="/run-computation/$id/settings" params={{ id: 'new' }}>
          {/* CUSTOMIZE: back to settings button */}
          <Button variant="contained">Back to Optimization Settings</Button>
        </AppLink>
      </Box>
    </Stack>
  );
}
