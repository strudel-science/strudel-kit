import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '../../components/DataGrid';
import { GridToolbar } from '@mui/x-data-grid';
import { PageHeader } from '../../components/PageHeader';
import { useCompareData } from './context/ContextProvider';
import { setSelectedRows } from './context/actions';
  
export const ScenarioList: React.FC = () => {
  const { state, dispatch } = useCompareData();
  
  return (
    <Box>
      <PageHeader
        pageTitle="{{ cookiecutter.mainPageTitle }}"
        description="{{ cookiecutter.mainPageDescription }}"
        actions={
          <Stack direction="row">
            <Box>
              <Link component={RouterLink} to="/compare-data/compare">
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
        sx={{ '{{' }}
          padding: 3,
          backgroundColor: 'white',
        {{ '}}' }}
      />
      <Container
        maxWidth="xl"
        sx={{ '{{' }}
          marginTop: 3,
          marginBottom: 3,
        {{ '}}' }}
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
            slots={{ '{{' }} toolbar: GridToolbar {{ '}}' }}
            slotProps={{ '{{' }}
              toolbar: {
                showQuickFilter: true,
              },
            {{ '}}' }}
            sx={{ '{{' }}
              '& .MuiDataGrid-toolbarContainer': {
                padding: 2,
                paddingBottom: 0
              }
            {{ '}}' }}
          />
        </Paper>
      </Container>
    </Box>
  );
}