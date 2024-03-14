import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Link, Paper, Stack, Toolbar, Typography } from '@mui/material';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '../../components/DataGrid';
import { useAppState } from '../../context/ContextProvider';
import { NewScenarioModal } from './NewScenarioModal';
import { getDataFromSource } from '../../utils/api.utils';
import { basename } from '../App';
import { useRunComputation } from './context/ContextProvider';

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
  
export const ComputationsList: React.FC = () => {
  const { state, dispatch } = useRunComputation();
  const [modalOpen, setModalOpen] = useState(false);

  const handleNewScenario = () => {
    setModalOpen(true);
  };

  return (
    <Box>
      <Container 
        maxWidth="xl"
        sx={{
          mt: 4
        }}
      >
        <Paper>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              padding: 2
            }}
          >
            <Box flex={1}>
              <Typography 
                variant="h6" 
                component="h1" 
              >
                Scenario List
              </Typography>
              <Typography 
                variant="subtitle1" 
                component="p" 
              >
                Scenarios represent a set of analysis inputs / parameters / settings and the results of that analysis. 
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={handleNewScenario}
            >
              New Scenario
            </Button>
            <NewScenarioModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
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
  )
}