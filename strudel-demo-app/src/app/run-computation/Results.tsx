import { Box, Button, Container, Grid, Link, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '../../components/DataGrid';
import { getDataFromSource } from '../../utils/api.utils';
import { basename } from '../App';
import { useRunComputation } from './context/ContextProvider';
import { setResultsBarChartData, setResultsLineChartData, setResultsTableData } from './context/actions';

export const Results: React.FC = () => {
  const { state, dispatch } = useRunComputation();
  
  /**
   * Fetch data for the inputs table when the page loads
   */
  useEffect(() => {
    if (state.results.table.data.length === 0) {
      const getData = async () => {
        const dataSource = 'default/run-computation/results-table.json';
        const data = await getDataFromSource(dataSource, basename);
        dispatch(setResultsTableData(data));
      }
      getData();
    }
    if (state.results.lineChart.data.length === 0) {
      const getData = async () => {
        const dataSource = 'default/run-computation/results-line-chart.json';
        const data = await getDataFromSource(dataSource, basename);
        dispatch(setResultsLineChartData(data));
      }
      getData();
    }
    if (state.results.barChart.data.length === 0) {
      const getData = async () => {
        const dataSource = 'default/run-computation/results-bar-chart.json';
        const data = await getDataFromSource(dataSource, basename);
        dispatch(setResultsBarChartData(data));
      }
      getData();
    }
  }, []);

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
              <Link component={RouterLink} to="/run-computation/scenario/data-inputs" sx={{ color: 'inherit', textDecoration: 'none' }}>
                Data Inputs
              </Link>
            </StepLabel>
          </Step>
          <Step key="Optimization Settings">
            <StepLabel>
              <Link component={RouterLink} to="/run-computation/scenario/settings" sx={{ color: 'inherit', textDecoration: 'none' }}>
                Optimization Settings
              </Link>
            </StepLabel>
          </Step>
          <Step key="Results">
            <StepLabel>
              <Link component={RouterLink} to="/run-computation/scenario/results" sx={{ color: 'inherit', textDecoration: 'none' }}>
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
                    rows={state.results.table.data}
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
        <Link component={RouterLink} to="/run-computation/scenario/settings">
          <Button variant="contained">Back to optimization settings</Button>
        </Link>
      </Box>
    </Stack>
  )
}