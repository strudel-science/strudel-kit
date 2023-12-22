import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '../../components/DataGrid';
import { PageHeader } from '../../components/PageHeader';
import { useCompareScenarios } from './context/ContextProvider';
import { setComparing, setSelectedRows } from './context/actions';
  
export const NewScenario: React.FC = () => {
  const { state, dispatch } = useCompareScenarios();

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
        pageTitle="New Scenario"
        description="Add a new scenario to compare to the others in your list."
        actions={
          <Stack direction="row">
            <Box>
              <Link component={RouterLink} to="/compare-scenarios">
                <Button variant="contained" color="warning">
                  Cancel
                </Button>
              </Link>
            </Box>
            <Box>
              <Link component={RouterLink} to="/compare-scenarios">
                <Button variant="contained">
                  Save Scenario
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
            padding: 2,
          }}
        >
          {/* TODO: add form */}
          Work in progress
        </Paper>
      </Container>
    </Box>
  );
}