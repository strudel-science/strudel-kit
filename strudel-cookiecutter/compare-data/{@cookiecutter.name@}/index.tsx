import { Box, Button, Container, Link, Paper, Stack } from '@mui/material';
import { GridToolbar } from '@mui/x-data-grid';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { useCompareData } from './_context/ContextProvider';
import { setSelectedRows } from './_context/actions';
import { taskflow } from './_config/taskflow.config';
import { SciDataGrid } from '../../components/SciDataGrid';

/**
 * List page to show comparable items in the compare-data Task Flow.
 * Items in this table are selectable and can be sent to the `<ScenarioComparison>`
 * page to be rendered in the comparison table.
 */
const ScenarioList: React.FC = () => {
  const { state, dispatch } = useCompareData();

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <PageHeader
        pageTitle={taskflow.pages.index.title}
        description={taskflow.pages.index.description}
        actions={
          <Stack direction="row">
            <Box>
              {state.selectedRows.length < 2 && (
                <Button
                  variant="outlined"
                  disabled
                  data-testid="cpd-compare-button"
                >
                  Compare {taskflow.properties.itemNamePlural}
                </Button>
              )}
              {state.selectedRows.length > 1 && (
                <Link component={RouterLink} to="compare">
                  <Button variant="contained" data-testid="cpd-compare-button">
                    Compare {taskflow.properties.itemNamePlural} (
                    {state.selectedRows.length})
                  </Button>
                </Link>
              )}
            </Box>
            <Box>
              <Link component={RouterLink} to="new">
                <Button variant="contained" data-testid="cpd-new-button">
                  New {taskflow.properties.itemName}
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
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <Paper>
          <SciDataGrid
            rows={state.data}
            getRowId={(row) => row[state.dataIdField]}
            columns={state.columns}
            checkboxSelection
            rowSelectionModel={state.selectedRows}
            onRowSelectionModelChange={(rows) =>
              dispatch(setSelectedRows(rows))
            }
            disableRowSelectionOnClick
            disableDensitySelector
            disableColumnFilter
            initialState={{
              pagination: { paginationModel: { page: 1, pageSize: 25 } },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            sx={{
              '& .MuiDataGrid-toolbarContainer': {
                padding: 2,
                paddingBottom: 0,
              },
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
};

// const ScenarioList: React.FC = () => {
//   const { state, dispatch } = useCompareData();
//   return (
//     <h1>Compare Data List</h1>
//   )
// }

export default ScenarioList;
