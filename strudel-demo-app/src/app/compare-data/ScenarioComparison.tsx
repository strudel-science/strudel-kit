import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Link, Paper, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { useCompareData } from './context/ContextProvider';
import { setComparing } from './context/actions';
import { DataGrid } from '@mui/x-data-grid';

/**
 * Comparison page for the compare-data Task Flow.
 * Displays a table with the selected items from `<ScenarioList>`
 * as the columns and the metrics as the rows.
 */
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
  
  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <PageHeader
        // strudel-kit-variable-next-line
        pageTitle="Compare Scenarios"
        // strudel-kit-variable-next-line
        description="Comparing multiple saved scenarios for a selected model, calculation, or analysis."
        actions={
          <Stack direction="row">
            <Box>
              <Link component={RouterLink} to=".">
                <Button variant="contained" startIcon={<ArrowBackIcon />}>
                  {/* strudel-kit-variable-next-line */}
                  Back to Scenarios
                </Button>
              </Link>
            </Box>
            <Box>
              <Link component={RouterLink} to="new">
                <Button variant="contained">
                  {/* strudel-kit-variable-next-line */}
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