import { AppBar, Box, Button, Container, FormControl, Grid, IconButton, InputLabel, Link, MenuItem, Modal, Paper, Select, Stack, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { setPreviewItem } from '../../components/contexts/analytics/actions';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { DataGrid } from '../../components/DataGrid';

const scenarios = [
  {
    id: 0,
    name: 'Scenario 1',
    analysisType: 'Sensitivity Analysis',
    createdDate: '05/24/2023',
    status: 'Running'
  },
  {
    id: 1,
    name: 'Scenario 2',
    analysisType: 'Sensitivity Analysis',
    createdDate: '05/24/2023',
    status: 'Draft'
  },
  {
    id: 2,
    name: 'Scenario 3',
    analysisType: 'Optimization',
    createdDate: '05/24/2023',
    status: 'Completed'
  },
  {
    id: 3,
    name: 'Scenario 4',
    analysisType: 'Optimization',
    createdDate: '05/23/2023',
    status: 'Completed'
  },
  {
    id: 4,
    name: 'Scenario 5',
    analysisType: 'Optimization',
    createdDate: '05/23/2023',
    status: 'Completed'
  },
];

const columns: GridColDef[] = [
  { 
    field: 'name', 
    headerName: 'Scenario Name', 
    width: 200 
  },
  { 
    field: 'analysisType', 
    headerName: 'Analysis Type', 
    width: 200 
  },
  { 
    field: 'createdDate', 
    headerName: 'Date Created', 
    width: 200 
  },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 200 
  },
  { 
    field: 'actions', 
    headerName: 'Actions', 
    type: 'actions',
    getActions: (params: GridRowParams) => [
      <GridActionsCellItem icon={<ContentCopyIcon/>} label="Duplicate" />,
      <GridActionsCellItem icon={<EditIcon/>} label="Edit" />,
      <GridActionsCellItem icon={<DeleteIcon/>} label="Delete" />
    ],
    flex: 1,
    // headerAlign: 'right',
    // align: 'right'
  },
];

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
  
export const NewScenarioModal: React.FC<Props> = ({
  modalOpen,
  setModalOpen
}) => {

  const handleClose = () => {
    setModalOpen(false);
  };

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
          New Analysis Scenario
        </Typography>
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
          <Select
            labelId="model-select-label"
            id="model-select"
            label="Model"
          >
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
          {/*<Link component={RouterLink} to="/run-computation/scenario/data-inputs">*/}
          <Link component={RouterLink} to="/myanalysis/scenario/data-inputs">
            <Button variant="contained" >
              Create
            </Button>
          </Link>
        </Box>
      </Stack>
    </Modal>
  )
}
