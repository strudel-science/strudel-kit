import { AppBar, Box, Button, Container, Grid, IconButton, Link, Paper, Stack, Step, StepLabel, Stepper, TextField, Toolbar, Typography } from '@mui/material';
import Plot from 'react-plotly.js';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { setPreviewItem } from '../../components/contexts/analytics/actions';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { DataGrid } from '../../components/DataGrid';
import { NewScenarioModal } from './NewScenarioModal';
import { chart } from './chart';
import { Data } from 'plotly.js';

const inputUnits = [
  {
    id: 0,
    name: 'value',
    unitType: 'value',
    lowerBound: 0,
    upperBound: 1,
    constraints: 'value'
  },
  {
    id: 1,
    name: 'value',
    unitType: 'value',
    lowerBound: 0,
    upperBound: 1,
    constraints: 'value'
  },
  {
    id: 2,
    name: 'value',
    unitType: 'value',
    lowerBound: 0,
    upperBound: 1,
    constraints: 'value'
  },
  {
    id: 3,
    name: 'value',
    unitType: 'value',
    lowerBound: 0,
    upperBound: 1,
    constraints: 'value'
  },
  {
    id: 4,
    name: 'value',
    unitType: 'value',
    lowerBound: 0,
    upperBound: 1,
    constraints: 'value'
  },
];

const columns: GridColDef[] = [
  { 
    field: 'name', 
    headerName: 'Unit Name', 
    width: 200 
  },
  { 
    field: 'unitType', 
    headerName: 'Unit Type', 
    width: 200 
  },
  { 
    field: 'constraints', 
    headerName: 'Constraints', 
    width: 200,
  },
  { 
    field: 'lowerBound', 
    headerName: 'Lower Bound', 
    width: 200,
    type: 'number'
  },
  { 
    field: 'upperBound', 
    headerName: 'Upper Bound', 
    width: 200,
    type: 'number'
  },
];

export const Results: React.FC = () => {
  return (
    <Stack spacing={0} flex={1}>
      <Box
        sx={{ "{{" <--$$-->
          backgroundColor: 'white',
          padding: 2,
          borderBottom: '1px solid',
          borderColor: 'neutral.main'
        }}
      >
        <Stepper activeStep={2} sx={{ "{{" <--$$--> maxWidth: 850 }}>
          <Step key="Data Inputs">
            <StepLabel>
              <Link component={RouterLink} to="/run-computation/scenario/data-inputs" sx={{ "{{" <--$$--> color: 'inherit', textDecoration: 'none' }}>
                Data Inputs
              </Link>
            </StepLabel>
          </Step>
          <Step key="Optimization Settings">
            <StepLabel>
              <Link component={RouterLink} to="/run-computation/scenario/settings" sx={{ "{{" <--$$--> color: 'inherit', textDecoration: 'none' }}>
                Optimization Settings
              </Link>
            </StepLabel>
          </Step>
          <Step key="Results">
            <StepLabel>
              <Link component={RouterLink} to="/run-computation/scenario/results" sx={{ "{{" <--$$--> color: 'inherit', textDecoration: 'none' }}>
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
          sx={{ "{{" <--$$-->
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
            sx={{ "{{" <--$$-->
              marginBottom: 2
            }}
          >
            Categories
          </Typography>
          <Typography 
            component="li"
            sx={{ "{{" <--$$-->
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
            sx={{ "{{" <--$$-->
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important'
            }}
          >
            System Costing
          </Typography>
          <Typography 
            component="li" 
            sx={{ "{{" <--$$-->
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
            sx={{ "{{" <--$$-->
              mt: 4
            }}
          >
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <Paper>
                  <Plot
                    data={[
                      {
                        x: [1, 2, 3, 4],
                        y: [10, 15, 13, 17],
                        type: 'scatter'
                      },
                      {
                        x: [1, 2, 3, 4],
                        y: [16, 5, 11, 9],
                        type: 'scatter'
                      },
                    ]}
                    layout={{ "{{" <--$$-->}}
                  />
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper>
                <Plot
                      data={chart.data as Data[]}
                      layout={chart.layout as any}
                    />
                  {/* <Plot
                      data={[
                        {
                          x: ['giraffes', 'orangutans', 'monkeys'],
                          y: [20, 14, 23],
                          name: 'SF Zoo',
                          type: 'bar'
                        },
                        {
                          x: ['giraffes', 'orangutans', 'monkeys'],
                          y: [12, 18, 29],
                          name: 'LA Zoo',
                          type: 'bar'
                        },
                      ]}
                      layout={{ "{{" <--$$-->}}
                    /> */}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <DataGrid
                    rows={inputUnits}
                    getRowId={(row) => row.id}
                    columns={columns}
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
        sx={{ "{{" <--$$-->
          backgroundColor: 'white',
          borderTop: '1px solid',
          borderColor: 'neutral.main',
          padding: 2,
        }}
      >
        <Link component={RouterLink} to="/run-computation/scenario/settings">
          <Button variant="contained">Back to optimization settings</Button>
        </Link>
      </Box>
    </Stack>
  )
}