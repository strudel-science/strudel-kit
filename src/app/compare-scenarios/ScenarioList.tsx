import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '../../components/DataGrid';
import { GridToolbar } from '@mui/x-data-grid';
import { PageHeader } from '../../components/PageHeader';
import { useCompareScenarios } from './context/ContextProvider';
import { setSelectedRows } from './context/actions';
  
export const ScenarioList: React.FC = () => {
  const { state, dispatch } = useCompareScenarios();
  
  return (
    <Box>
      <PageHeader
        pageTitle="Scenarios"
        description="Collection of various scenarios saved from simulations/ optimizations/ calculations"
        actions={
          <Stack direction="row">
            <Box>
              {state.selectedRows.length === 0 && (
                <Button 
                  variant="outlined"
                >
                  Compare Scenarios
                </Button>
              )}
              {state.selectedRows.length > 0 && (
                <Button 
                  variant={state.selectedRows.length > 1 ? 'contained' : 'outlined' }
                >
                  Compare Scenarios ({state.selectedRows.length})
                </Button>
              )}
            </Box>
            <Link component={RouterLink} to="/contributing-data/new">
              <Button variant="contained">
                New Scenario
              </Button>
            </Link>

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
          mt: 4
        }}
      >
        <Paper>
          <DataGrid
            rows={state.data}
            getRowId={(row) => row[state.dataIdField]}
            columns={state.columns}
            checkboxSelection
            rowSelectionModel={state.selectedRows}
            onRowSelectionModelChange={(rows) => dispatch(setSelectedRows(rows))}
            disableRowSelectionOnClick
            disableDensitySelector
            disableColumnFilter
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            sx={{
              '& .MuiDataGrid-toolbarContainer': {
                padding: 2,
                paddingBottom: 0
              }
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
}