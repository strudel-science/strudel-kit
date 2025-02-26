import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { NewScenarioModal } from '../-components/NewScenarioModal';
import { useRunComputation } from '../-context/ContextProvider';
import { taskflow } from '../../../../pages/run-computation/_config/taskflow.config';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/task-flows/run-computation/_layout/')({
  component: ListPage,
});

/**
 * List page for all compuation runs in the run-computation Task Flow.
 * Can open the `<NewScenarioModal>` from here and then proceed to the
 * `<DataInputs>` component for the next step.
 */
function ListPage() {
  const { state } = useRunComputation();
  const [modalOpen, setModalOpen] = useState(false);

  const handleNewScenario = () => {
    setModalOpen(true);
  };

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
        }}
      >
        <Paper>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              padding: 2,
            }}
          >
            <Box flex={1}>
              <Typography variant="h6" component="h1">
                {taskflow.pages.index.title}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {taskflow.pages.index.description}
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={handleNewScenario}
              data-testid="rnc-new-button"
            >
              New {taskflow.properties.itemName}
            </Button>
            <NewScenarioModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          </Stack>
          <DataGrid
            rows={state.list.table.data}
            getRowId={(row) => row[state.list.table.dataIdField]}
            columns={state.list.table.columns}
            disableColumnSelector
            disableRowSelectionOnClick
          />
        </Paper>
      </Container>
    </Box>
  );
}
