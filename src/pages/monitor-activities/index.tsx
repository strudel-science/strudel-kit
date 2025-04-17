import { Container, Paper, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridComparatorFn } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useDataFromSource } from '../../hooks/useDataFromSource';

export const Route = createFileRoute('/monitor-activities/')({
  component: ActivityList,
});

const dateComparator: GridComparatorFn<string> = (v1, v2) => {
  return dayjs(v1).isAfter(dayjs(v2)) ? 1 : 0;
};

// CUSTOMIZE: list view table columns
const columns: GridColDef[] = [
  {
    field: 'experiment_name',
    headerName: 'Experiment Name',
    width: 200,
  },
  {
    field: 'start_time',
    headerName: 'Start Time',
    sortComparator: dateComparator,
    width: 200,
  },
  {
    field: 'end_time',
    headerName: 'End Time',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
  },
];

/**
 * List view of all activities in the monitor-activites Task Flow.
 */
function ActivityList() {
  // CUSTOMIZE: list view data source
  const experiments = useDataFromSource('dummy-data/experiments.json');
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginBottom: 3,
        marginTop: 3,
      }}
    >
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" component="h1">
            Experiments test
          </Typography>
        </Stack>
        <Paper>
          <DataGrid
            rows={experiments || []}
            // CUSTOMIZE: data source unique ID field
            getRowId={(row) => row.id}
            columns={columns}
            // CUSTOMIZE: initial sort field
            initialState={{
              sorting: {
                sortModel: [{ field: 'start_time', sort: 'desc' }],
              },
            }}
            onRowClick={() => navigate({ to: '/monitor-activities/detail' })}
            disableColumnSelector
            disableRowSelectionOnClick
          />
        </Paper>
      </Stack>
    </Container>
  );
}
