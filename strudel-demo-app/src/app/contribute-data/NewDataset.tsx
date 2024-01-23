import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { DataGrid } from '../../components/DataGrid';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { DataFilesPanel } from './DataFilesPanel';
import { MetadataPanel } from './MetadataPanel';
  
export const NewDataset: React.FC = () => {  
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginBottom: 3,
        marginTop: 3,
      }}
    >
      <Stack>
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Typography variant="h6" component="h1">
              Upload a new dataset
            </Typography>
            <Typography>
              Mention the data contribution steps in brief, and also major requirements if any. Also give links to detailed documentation of steps, requirements and guidelines. Link to documentation.
            </Typography>
          </Stack>
          <Stack direction="row">
            <Box>
              <Link component={RouterLink} to="/contribute-data/portal">
                <Button variant="contained" color="warning">
                  Cancel
                </Button>
              </Link>
            </Box>
            <Box>
              <Link component={RouterLink} to="/contribute-data/review">
                <Button variant="contained" sx={{ whiteSpace: 'nowrap' }}>
                  Save Dataset
                </Button>
              </Link>
            </Box>
          </Stack>
        </Stack>
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={7} md={12}>
              <MetadataPanel />
            </Grid>
            <Grid item lg={5} md={12}>
              <DataFilesPanel />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}

const files = [
  {
    id: 0,
    filename: 'xx',
    type: 'csv',
    size: '213 MB',
    status: 'Uploading'
  },
  {
    id: 1,
    filename: 'xy',
    type: 'csv',
    size: '213 MB',
    status: 'Uploading'
  },
  {
    id: 2,
    filename: 'xs',
    type: 'csv',
    size: '213 MB',
    status: 'Uploading'
  },
  {
    id: 3,
    filename: 'xe',
    type: 'tsv',
    size: '2 GB',
    status: 'Uploaded'
  },
  {
    id: 4,
    filename: 'xz',
    type: 'txt',
    size: '15 MB',
    status: 'Uploaded'
  }
]

const columns: GridColDef[] = [
  { 
    field: 'filename', 
    headerName: 'File Name', 
    width: 150 
  },
  { 
    field: 'type', 
    headerName: 'Type', 
    width: 100 
  },
  { 
    field: 'size', 
    headerName: 'Size', 
    width: 100 
  },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 100 
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
  },
];