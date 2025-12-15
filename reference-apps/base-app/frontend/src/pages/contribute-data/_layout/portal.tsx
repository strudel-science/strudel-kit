import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { createFileRoute } from '@tanstack/react-router';
import { useDataFromSource } from '../../../hooks/useDataFromSource';
import { AppLink } from '../../../components/AppLink';

export const Route = createFileRoute('/contribute-data/_layout/portal')({
  component: ContributorPortal,
});

// CUSTOMIZE: the columns for the uploads table
const columns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'Dataset Title',
    width: 200,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 200,
  },
  {
    field: 'summary',
    headerName: 'Summary',
    width: 200,
  },
  {
    field: 'doi',
    headerName: 'DOI',
    width: 200,
  },
  {
    field: 'publication_date',
    headerName: 'Created Date',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    getActions: () => [
      <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
    ],
    flex: 1,
  },
];

/**
 * Page to show a contributor's uploads in the contribute-data Task Flow.
 * Also allows users to start a new dataset which sends them to the `<NewDataset>` component.
 */
function ContributorPortal() {
  // CUSTOMIZE: the data source for the contributed datasets table
  const datasets = useDataFromSource('dummy-data/contributor_datasets.json');

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 4,
      }}
    >
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* CUSTOMIZE: the page title */}
          <Typography variant="h6" component="h1">
            Your Dataset Uploads
          </Typography>
          <AppLink to="/contribute-data/new">
            {/* CUSTOMIZE: the button for creating a new entry */}
            <Button variant="contained" data-testid="ctd-new-button">
              New Dataset
            </Button>
          </AppLink>
        </Stack>
        <Paper>
          <DataGrid
            rows={datasets || []}
            // CUSTOMIZE: the data ID field
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
