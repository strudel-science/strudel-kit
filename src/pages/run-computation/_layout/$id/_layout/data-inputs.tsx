import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDataFromSource } from '../../../../../hooks/useDataFromSource';
import { useRunComputation } from '../../../-context/ContextProvider';
import { setInputsTableData } from '../../../-context/actions';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../../../../../components/AppLink';

export const Route = createFileRoute(
  '/run-computation/_layout/$id/_layout/data-inputs'
)({
  component: DataInputsPage,
});

/**
 * Page to display input data after creating or selecting an item from
 * the `<ComputationsList>` page in the run-computation Task Flow.
 * Table columns are configured in `definitions.inputs.table.columns`
 */
function DataInputsPage() {
  const { state, dispatch } = useRunComputation();
  // CUSTOMIZE: inputs table data source
  const inputsData = useDataFromSource('dummy-data/inputs.json');

  /**
   * Set data for the inputs table when the data loads
   */
  useEffect(() => {
    if (!state.inputs.table.data || state.inputs.table.data.length === 0) {
      dispatch(setInputsTableData(inputsData));
    }
  }, [inputsData]);

  return (
    <Stack spacing={0} flex={1}>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 2,
          borderBottom: '1px solid',
          borderColor: 'neutral.main',
        }}
      >
        <Stepper activeStep={0} sx={{ maxWidth: 850 }}>
          <Step key="Data Inputs">
            <StepLabel>
              <AppLink
                to="/run-computation/$id/data-inputs"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Data Inputs
              </AppLink>
            </StepLabel>
          </Step>
          <Step key="Optimization Settings">
            <StepLabel>
              <AppLink
                to="/run-computation/$id/settings"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Optimization Settings
              </AppLink>
            </StepLabel>
          </Step>
          <Step key="Results">
            <StepLabel>
              <AppLink
                to="/run-computation/$id/results"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Results
              </AppLink>
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
              marginBottom: 2,
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
              marginRight: '-2rem !important',
            }}
          >
            Input Units
          </Typography>
          <Typography
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            Input Streams
          </Typography>
          <Typography
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            Unit Costing
          </Typography>
        </Stack>
        <Box flex={1} sx={{ overflow: 'hidden' }}>
          <Container
            maxWidth="xl"
            sx={{
              mt: 4,
            }}
          >
            <Paper>
              <DataGrid
                rows={state.inputs.table.data || []}
                getRowId={(row) => row[state.inputs.table.dataIdField]}
                columns={state.inputs.table.columns}
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
          bottom: 0,
          padding: 2,
          position: 'fixed',
          textAlign: 'right',
          width: '100%',
        }}
      >
        <AppLink to="/run-computation/$id/settings" params={{ id: 'new' }}>
          <Button variant="contained" data-testid="rnc-settings-next-button">
            Continue to Optimization Settings
          </Button>
        </AppLink>
      </Box>
    </Stack>
  );
}
