import { Box, Button, Container, Link, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useDataFromSource } from '../../../utils/useDataFromSource';
import { useRunComputation } from '../_context/ContextProvider';
import { setInputsTableData } from '../_context/actions';
import { taskflow } from '../_config/taskflow.config';

/**
 * Page to display input data after creating or selecting an item from 
 * the `<ComputationsList>` page in the run-computation Task Flow.
 * Table columns are configured in `definitions.inputs.table.columns`
 */
const DataInputsPage: React.FC = () => {
  const { state, dispatch } = useRunComputation();
  const inputsData = useDataFromSource(taskflow.data.inputs.source);
  
  /**
   * Set data for the inputs table when the data loads
   */
  useEffect(() => {
    if (!state.inputs.table.data || state.inputs.table.data.length === 0) {
      dispatch(setInputsTableData(inputsData));
    }
  }, [inputsData]);

  /**
   * Content to render on the page for this component
   */
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
              <Link component={RouterLink} to="../data-inputs" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {taskflow.pages.dataInputs.title}
              </Link>
            </StepLabel>
          </Step>
          <Step key="Optimization Settings">
            <StepLabel>
              <Link component={RouterLink} to="../settings" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {taskflow.pages.settings.title}
              </Link>
            </StepLabel>
          </Step>
          <Step key="Results">
            <StepLabel>
              <Link component={RouterLink} to="../results" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {taskflow.pages.results.title}
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
          width: '100%'
        }}
      >
        <Link component={RouterLink} to="../settings">
          <Button variant="contained">Continue to {taskflow.pages.settings.title}</Button>
        </Link>
      </Box>
    </Stack>
  )
}

export default DataInputsPage;