import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Paper, Stack } from '@mui/material';
import { useEffect } from 'react';
import { PageHeader } from '../../../components/PageHeader';
import { DataGrid } from '@mui/x-data-grid';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../../../components/AppLink';
import { setComparing } from '../-context/actions';
import { useCompareData } from '../-context/ContextProvider';

export const Route = createFileRoute('/compare-data/_layout/compare')({
  component: ScenarioComparison,
});

/**
 * Comparison page for the compare-data Task Flow.
 * Displays a table with the selected items from `<ScenarioList>`
 * as the columns and the metrics as the rows.
 */
function ScenarioComparison() {
  const { state, dispatch } = useCompareData();

  /**
   * Set comparing to true whenever this page renders.
   * Set it back to false when the component is torn down.
   */
  useEffect(() => {
    dispatch(setComparing(true));
    return () => {
      dispatch(setComparing(false));
    };
  }, []);

  return (
    <Box>
      <PageHeader
        // CUSTOMIZE: the title that displays at the top of the page
        pageTitle="Compare Data App"
        // CUSTOMIZE: the subtitle that displays underneath the title
        description="Description of this app section"
        actions={
          <Stack direction="row">
            <Box>
              <AppLink to="..">
                {/* CUSTOMIZE: the back button text */}
                <Button variant="contained" startIcon={<ArrowBackIcon />}>
                  Back to scenarios
                </Button>
              </AppLink>
            </Box>
            <Box>
              <AppLink to="/compare-data/new">
                {/* CUSTOMIZE: the new button text */}
                <Button variant="contained">New scenario</Button>
              </AppLink>
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
              borderRightColor: 'neutral.main',
            },
            '& .compare-data--metric': {
              fontWeight: 'bold',
            },
          }}
        >
          {state.comparing && (
            <DataGrid
              rows={state.comparisonData}
              getRowId={(row) => row.metric!}
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
