import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { DataGrid } from '../../components/DataGrid';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { DataFilesPanel, files } from './DataFilesPanel';
import { MetadataPanel } from './MetadataPanel';
import { LabelValueTable } from '../../components/LabelValueTable';
  
export const DatasetView: React.FC = () => {  
  // TODO: use context for dataset state
  return (
    <Paper
      sx={{
        height: '100%',
        padding: 2,
      }}
    >
      <Stack>
        <Typography
          component="h2"
          variant="h6"
        >
          My Dataset
        </Typography>
        <Typography>
          Laboris incididunt ullamco dolore ex. Non ad aute cillum excepteur. Quis exercitation duis quis ad. Laborum eiusmod incididunt magna dolor eiusmod cupidatat non veniam sit consequat anim esse. Dolore fugiat incididunt et qui dolore dolor. Ut aute dolore magna ea commodo ullamco velit in aliquip sunt id ea.
        </Typography>
        <LabelValueTable
          rows={[
            {
              label: 'DOI',
              value: 'http://dx.doi.org/10.123432/NGT/XXXXXXX'
            },
            {
              label: 'Start Date',
              value: '1 January 2023'
            },
            {
              label: 'End Date',
              value: '1 November 2023'
            },
            {
              label: 'Category',
              value: 'Groundwater'
            }
          ]}
        />
        <Box>
          <Typography
            component="h3"
            fontWeight="bold"
          >
            Dataset Files
          </Typography>
          <DataGrid
            rows={files}
            getRowId={(row) => row.id}
            columns={columns}
            disableColumnSelector
            disableRowSelectionOnClick
          />
        </Box>
      </Stack>
    </Paper>
  );
}

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
    flex: 1,
  },
];