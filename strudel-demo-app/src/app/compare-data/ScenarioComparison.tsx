import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '../../components/DataGrid';
import { PageHeader } from '../../components/PageHeader';
import { useCompareData } from './context/ContextProvider';
import { setComparing, setSelectedRows } from './context/actions';
  
export const ScenarioComparison: React.FC = () => {
  const { state, dispatch } = useCompareData();

  /**
   * Set comparing to true whenever this page renders.
   * Set it back to false when the component is torn down.
   */
  useEffect(() => {
    dispatch(setComparing(true));
    return () => {
      dispatch(setComparing(false))
    }
  }, []);
  
  return (
    <Box>
      <PageHeader
        pageTitle="Compare Scenarios"
        description="Comparing multiple saved scenarios for a selected model, calculation, or analysis."
        actions={
          <Stack direction="row">
            <Box>
              <Link component={RouterLink} to="/compare-data">
                <Button variant="contained" startIcon={<ArrowBackIcon />}>
                  Back to Scenarios
                </Button>
              </Link>
            </Box>
            <Box>
              <Link component={RouterLink} to="/compare-data/new">
                <Button variant="contained">
                  New Scenario
                </Button>
              </Link>
            </Box>
          </Stack>
        }
        sx={{
          padding: 3,
          backgroundColor: 'white',
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <Paper
          sx={{
            '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
              borderRight: '1px solid',
              borderRightColor: 'neutral.main'
            },
            '& .compare-data--metric': {
              fontWeight: 'bold',
            },
            
          }}
        >
          {state.comparing && (
            <DataGrid
              rows={state.comparisonData}
              getRowId={(row) => row.metric}
              columns={state.comparisonColumns}
              disableRowSelectionOnClick
              disableDensitySelector
              disableColumnFilter
            />
          )}
        </Paper>
      </Container>
    </Box>
  );
}