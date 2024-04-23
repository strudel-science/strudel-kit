import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Container, Link, Paper, Stack, Typography } from '@mui/material';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useDataFromSource } from '../../utils/useDataFromSource';
import definitions from './_config/definitions.json';
import { basename } from '../../main';

/**
 * Page to show a contributor's uploads in the contribute-data Task Flow.
 * Also allows users to start a new dataset which sends them to the `<NewDataset>` component.
 */
const ContributorPortal: React.FC = () => {
  // strudel-kit-variable-next-line
  const datasets = useDataFromSource('default/contribute-data/contributor_datasets.json', basename);
  
  /**
   * Content to render on the page for this component
   */
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
            {/* strudel-kit-variable-next-line */}
            Your Dataset Uploads
          </Typography>
          <Link component={RouterLink} to="../new">
            <Button variant="contained">
              New Dataset
            </Button>
          </Link>
        </Stack>
        <Paper>
          <DataGrid
            rows={datasets || []}
            // strudel-kit-variable-next-line
            getRowId={(row) => row['id']}
            columns={columns}
            disableColumnSelector
            disableRowSelectionOnClick
          />
        </Paper>
      </Stack>
    </Container>
  );
}

/**
 * Define column definitions in-file for prototyping
 */
const columns: GridColDef[] = [
  ...definitions.columns.portal.table,
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

export default ContributorPortal;