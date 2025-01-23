import * as React from 'react';
import { useAppState } from '../context/ContextProvider';
import { closeApiModal } from '../context/actions';
import {
  Button,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export const ApiModal: React.FC = () => {
  const app = useAppState();
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleClose = () => {
    app.dispatch(closeApiModal());
  };

  const handleSubmit = () => {
    localStorage.setItem('apiTokenName', name);
    localStorage.setItem('apiTokenValue', value);
    window.location.reload();
  };

  return (
    <div>
      <Modal
        open={app.state.apiModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            left: '50%',
            p: 4,
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h6" component="h2">
              API Authentication Required
            </Typography>
            <Typography>
              Enter the name of your API token (e.g. X-ApiToken) and the value
              of your API token (e.g. abc123).
            </Typography>
            <TextField
              value={name}
              label="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField
              value={value}
              label="Value"
              type="password"
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </div>
  );
};
