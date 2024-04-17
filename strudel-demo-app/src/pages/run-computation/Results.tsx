import { Box, Button, Container, Grid, Link, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import { Link as RouterLink } from 'react-router-dom';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { basename } from '../../main';
import { useRunComputation } from './_context/ContextProvider';
import { setResultsBarChartData, setResultsLineChartData, setResultsTableData } from './_context/actions';

/**
 * Results page to display after a computation completes in the run-computation Task Flow.
 * Displays a line chart, bar chart, and table of results from the computation.
 */
export const Results: React.FC = () => {
  const { state, dispatch } = useRunComputation();
  // strudel-kit-variable-next-line
  const tableData = useDataFromSource('default/run-computation/results_table.json', basename);
  // strudel-kit-variable-next-line
  const lineData = useDataFromSource('default/run-computation/results_line_chart.json', basename);
  // strudel-kit-variable-next-line
  const barData = useDataFromSource('default/run-computation/results_bar_chart.json', basename);

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
    if (!state.results.lineChart.data || state.results.lineChart.data.length === 0) {
      dispatch(setResultsLineChartData(lineData));
    }
  }, [lineData]);

  /**
   * Set data for the results bar chart when the data loads
   */
  useEffect(() => {
    if (!state.results.barChart.data || state.results.barChart.data.length === 0) {
      dispatch(setResultsBarChartData(barData));
    }
  }, [barData]);

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
        <Stepper activeStep={2} sx={{ maxWidth: 850 }}>
          <Step key="Data Inputs">
            <StepLabel>
              <Link component={RouterLink} to="../data-inputs" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {/* strudel-kit-variable-next-line   */}
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
              marginBottom: 2
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
              marginRight: '-2rem !important'
            }}
          >
            Summary
          </Typography>
          <Typography 
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important'
            }}
          >
            System Costing
          </Typography>
          <Typography 
            component="li" 
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important'
            }}
          >
            System Metrics
          </Typography>
        </Stack>
        <Box flex={1}>
          <Container
            maxWidth="xl"
            sx={{
              mt: 4
            }}
          >
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <Paper>
                  <Plot
                    data={state.results.lineChart.data}
                    layout={{}}
                  />
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper>
                  <Plot
                    data={state.results.barChart.data}
                    layout={{}}
                  />
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
          width: '100%'
        }}
      >
        <Link component={RouterLink} to="../settings">
          {/* strudel-kit-variable-next-line */}
          <Button variant="contained">Back to optimization settings</Button>
        </Link>
      </Box>
    </Stack>
  )
}