import { Container, Paper, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridComparatorFn } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { basename } from '../App';

/**
 * List view of all activities in the monitor-activites Task Flow.
 */
export const ActivityList: React.FC = () => {
  const experiments = useDataFromSource('default/monitor-activities/experiments.json', basename);
  const navigate = useNavigate();
  
  /**
   * Content to render on the page for this component
   */
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginBottom: 3,
        marginTop: 3,
      }}
    >
      <Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="h1">
            Experiments
          </Typography>
        </Stack>
        <Paper>
          <DataGrid
            rows={experiments || []}
            getRowId={(row) => row.id}
            columns={columns}
            initialState={{
              sorting: {
                sortModel: [{ field: 'start_time', sort: 'desc' }],
              },
            }}
            onRowClick={() => navigate('/monitor-activities/list/detail')}
            disableColumnSelector
            disableRowSelectionOnClick
          />
        </Paper>
      </Stack>
    </Container>
  );
}

const dateComparator: GridComparatorFn<string> = (v1, v2) => {
  return dayjs(v1).isAfter(dayjs(v2)) ? 1 : 0;
}

const columns: GridColDef[] = [
  { 
    field: 'experiment_name', 
    headerName: 'Experiment Name', 
    width: 200 
  },
  { 
    field: 'start_time', 
    headerName: 'Start Time',
    sortComparator: dateComparator,
    width: 200 
  },
  { 
    field: 'end_time', 
    headerName: 'End Time', 
    type: 'datetime',
    width: 200 
  },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 200 
  }
];