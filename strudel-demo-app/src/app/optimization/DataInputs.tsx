import { AppBar, Box, Button, Container, Grid, IconButton, Link, Paper, Stack, Step, StepLabel, Stepper, TextField, Toolbar, Typography } from '@mui/material';
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

export const DataInputs: React.FC = () => {
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
        <Stepper activeStep={0} sx={{ maxWidth: 850 }}>
          <Step key="Data Inputs">
            <StepLabel>
              <Link component={RouterLink} to="/optimization/scenario/data-inputs" sx={{ color: 'inherit', textDecoration: 'none' }}>
                Data Inputs
              </Link>
            </StepLabel>
          </Step>
          <Step key="Optimization Settings">
            <StepLabel>
              <Link component={RouterLink} to="/optimization/scenario/settings" sx={{ color: 'inherit', textDecoration: 'none' }}>
                Optimization Settings
              </Link>
            </StepLabel>
          </Step>
          <Step key="Results">
            <StepLabel>
              <Link component={RouterLink} to="/optimization/scenario/results" sx={{ color: 'inherit', textDecoration: 'none' }}>
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
            Input Units
          </Typography>
          <Typography 
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important'
            }}
          >
            Input Streams
          </Typography>
          <Typography 
            component="li" 
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important'
            }}
          >
            Unit Costing
          </Typography>
        </Stack>
        <Box flex={1} sx={{ overflow: 'hidden' }}>
          <Container
            maxWidth="xl"
            sx={{
              mt: 4
            }}
          >
            <Paper>
              <DataGrid
                rows={inputUnits}
                getRowId={(row) => row.id}
                columns={columns}
                disableColumnSelector
                disableRowSelectionOnClick
              />
            </Paper>  
          </Container>
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: 'white',
          borderTop: '1px solid',
          borderColor: 'neutral.main',
          padding: 2,
          textAlign: 'right'
        }}
      >
        <Link component={RouterLink} to="/optimization/scenario/settings">
          <Button variant="contained">Continue to optimization settings</Button>
        </Link>
      </Box>
    </Stack>
  )
}