import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

/**
 * Panel to display on the `<NewDataset>` page of the contribute-data Task Flow.
 * Shows a table with files that have been uploaded as part of the dataset.
 */
export const DataFilesPanel: React.FC = () => {  
  return (
    <Paper
      sx={{
        height: '100%',
      }}
    >
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
        sx={{
          height: 'auto',
        }}
      />
    </Paper>
  );
}

/**
 * Define files table data in-file for prototyping
 */
export const files = [
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

/**
 * Define column definitions in-file for prototyping
 */
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