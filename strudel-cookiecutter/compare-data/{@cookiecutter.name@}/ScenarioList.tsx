import { Box, Button, Container, Link, Paper, Stack } from '@mui/material';
import { GridToolbar } from '@mui/x-data-grid';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { PageHeader } from '../../components/PageHeader';
import { useCompareData } from './context/ContextProvider';
import { setSelectedRows } from './context/actions';
  
/**
 * List page to show comparable items in the compare-data Task Flow.
 * Items in this table are selectable and can be sent to the `<ScenarioComparison>` 
 * page to be rendered in the comparison table. 
 */
export const ScenarioList: React.FC = () => {
  const { state, dispatch } = useCompareData();
  
  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <PageHeader
        pageTitle="{@ cookiecutter.pages.list.pageTitle @}"
        description="{@ cookiecutter.pages.list.pageDescription @}"
        actions={
          <Stack direction="row">
            <Box>
              <Link component={RouterLink} to="compare">
                {state.selectedRows.length === 0 && (
                  <Button 
                    variant="outlined"
                  >
                    Compare {@ cookiecutter.compareItemPlural @}
                  </Button>
                )}
                {state.selectedRows.length > 0 && (
                  <Button 
                    variant={state.selectedRows.length > 1 ? 'contained' : 'outlined' }
                  >
                    Compare {@ cookiecutter.compareItemPlural @} ({state.selectedRows.length})
                  </Button>
                )}
              </Link>
            </Box>
            <Box>
              <Link component={RouterLink} to="new">
                <Button variant="contained">
                  New {@ cookiecutter.compareItem @}
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