import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { AppLink } from '../../../components/AppLink';

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Modal to display over the `<ComputationsList>` to fill out a form for creating
 * a new computation run.
 * Completing the form takes you to the `<DataInputs>` step.
 */
export const NewScenarioModal: React.FC<Props> = ({
  modalOpen,
  setModalOpen,
}) => {
  const handleClose = () => {
    setModalOpen(false);
  };

  /**
   * Content to render on the page for this component
   */
  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        direction="column"
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 550,
          bgcolor: 'background.paper',
          border: '1px solid #ccc',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {/* CUSTOMIZE: new item modal title */}
          New Analysis Scenario
        </Typography>
        {/* CUSTOMIZE: new item form components */}
        <FormControl fullWidth>
          <InputLabel id="analysis-type-select-label">Analysis Type</InputLabel>
          <Select
            labelId="analysis-type-select-label"
            id="analysis-type-select"
            label="Age"
          >
            <MenuItem value={10}>Analysis Type 1</MenuItem>
            <MenuItem value={20}>Analysis Type 2</MenuItem>
            <MenuItem value={30}>Analysis Type 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="model-select-label">Model</InputLabel>
          <Select labelId="model-select-label" id="model-select" label="Model">
            <MenuItem value={10}>Model 1</MenuItem>
            <MenuItem value={20}>Model 2</MenuItem>
            <MenuItem value={30}>Model 3</MenuItem>
          </Select>
        </FormControl>
        <TextField id="name-field" label="Scenario Name" variant="outlined" />
        <TextField
          id="description-field"
          label="Description"
          multiline
          rows={4}
        />
        <Box textAlign="right">
          <AppLink to="/run-computation/$id/data-inputs" params={{ id: 'new' }}>
            <Button variant="contained" data-testid="rnc-create-button">
              Create
            </Button>
          </AppLink>
        </Box>
      </Stack>
    </Modal>
  );
};
