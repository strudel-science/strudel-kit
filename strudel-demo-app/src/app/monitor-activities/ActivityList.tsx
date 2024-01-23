import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { DataGrid } from '../../components/DataGrid';
import { GridActionsCellItem, GridColDef, GridComparatorFn, GridRowParams } from '@mui/x-data-grid';
import dayjs from 'dayjs';
  
export const ActivityList: React.FC = () => {
  const [experiments, setExperiments] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (experiments.length === 0) {
      const getData = async () => {
        const data: any = await d3.json(`${basename}/data/experiments.json`);
        setExperiments(data);
      }
      getData();
    }
  }, []);
  
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
            rows={experiments}
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