import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { DataGrid } from '../../components/DataGrid';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
  
export const ContributorPortal: React.FC = () => {
  const [datasets, setDatasets] = useState<any[]>([]);

  useEffect(() => {
    if (datasets.length === 0) {
      const getData = async () => {
        const data: any = await d3.json(`${basename}/data/contributor_datasets.json`);
        setDatasets(data);
      }
      getData();
    }
  }, []);
  
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 4
      }}
    >
      <Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="h1">
            Your Dataset Uploads
          </Typography>
          <Link component={RouterLink} to="/contribute-data/new">
            <Button variant="contained">
              New Dataset
            </Button>
          </Link>
        </Stack>
        <Paper>
          <DataGrid
            rows={datasets}
            getRowId={(row) => row.id}
            columns={columns}
            disableColumnSelector
            disableRowSelectionOnClick
          />
        </Paper>
      </Stack>
    </Container>
  );
}

const columns: GridColDef[] = [
  { 
    field: 'title', 
    headerName: 'Dataset Title', 
    width: 200 
  },
  { 
    field: 'category', 
    headerName: 'Category', 
    width: 200 
  },
  { 
    field: 'summary', 
    headerName: 'Summary', 
    width: 200 
  },
  { 
    field: 'doi', 
    headerName: 'DOI', 
    width: 200 
  },
  { 
    field: 'publication_date', 
    headerName: 'Created Date', 
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
      <GridActionsCellItem icon={<EditIcon/>} label="Edit" />,
      <GridActionsCellItem icon={<DeleteIcon/>} label="Delete" />
    ],
    flex: 1,
    // headerAlign: 'right',
    // align: 'right'
  },
];