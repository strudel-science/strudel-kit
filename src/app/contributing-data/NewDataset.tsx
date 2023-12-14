import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { DataGrid } from '../../components/DataGrid';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
  
export const NewDataset: React.FC = () => {  
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4
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
          <Box>
            <Link component={RouterLink} to="/contributing-data/portal">
              <Button variant="contained" sx={{ whiteSpace: 'nowrap' }}>
                Save Dataset
              </Button>
            </Link>
          </Box>
        </Stack>
        <Box>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Paper>
                <Box
                  sx={{
                    padding: 2
                  }}
                >
                  <Typography
                    fontWeight="bold"
                    component="h2" 
                  >
                    Metadata
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    padding: 2
                  }}
                >
                  <Typography
                    fontWeight="bold"
                    component="h2" 
                  >
                    Dataset Files
                  </Typography>
                  <Button
                    variant="contained"
                  >
                    Add Files
                  </Button>
                </Stack>
                <DataGrid
                  rows={files}
                  getRowId={(row) => row.id}
                  columns={columns}
                  disableColumnSelector
                  disableRowSelectionOnClick
                />
              </Paper>
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