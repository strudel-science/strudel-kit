import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid, GridColDef, GridComparatorFn } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import Plot from 'react-plotly.js';
import { createFileRoute } from '@tanstack/react-router';
import { useDataFromSource } from '../../../hooks/useDataFromSource';
import { AppLink } from '../../../components/AppLink';
import { LabelValueTable } from '../../../components/LabelValueTable';

export const Route = createFileRoute('/task-flows/monitor-activities/detail')({
  component: ActivityDetail,
});

const dateComparator: GridComparatorFn<string> = (v1, v2) => {
  return dayjs(v1).isAfter(dayjs(v2)) ? 1 : 0;
};

const columns: GridColDef[] = [
  {
    field: 'event_type',
    headerName: 'Event Type',
    width: 200,
  },
  {
    field: 'event_time',
    headerName: 'Event Time',
    sortComparator: dateComparator,
    width: 200,
  },
  {
    field: 'confidence',
    headerName: 'Confidence',
    type: 'number',
    width: 200,
  },
];

/**
 * Detail view of the selected activity from `<ActivityList>` in monitor-activities Task Flow.
 * The two components are not currently hooked together.
 */
function ActivityDetail() {
  const experiment = useDataFromSource(
    'data/default/monitor-activities/experiment_detail.json'
  );

  const getNoteRows = (notes: any[]) => {
    return notes.map((note) => {
      note.label = note.created_time;
      note.value = note.content;
      return note;
    });
  };

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
        <Stack direction="row" alignItems="center">
          <AppLink to="..">
            <IconButton data-testid="mna-back-button">
              <ArrowBackIcon />
            </IconButton>
          </AppLink>
          <Typography variant="h6" component="h1">
            {experiment?.experiment_name}
          </Typography>
        </Stack>
        <Box>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Paper>
                {experiment && (
                  <DataGrid
                    rows={experiment.events}
                    getRowId={(row) => row.id}
                    columns={columns}
                    initialState={{
                      sorting: {
                        sortModel: [{ field: 'event_time', sort: 'desc' }],
                      },
                    }}
                    disableColumnSelector
                    disableRowSelectionOnClick
                  />
                )}
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Stack>
                <Paper
                  sx={{
                    padding: 2,
                  }}
                >
                  <Stack>
                    <Typography variant="h6" component="h2">
                      Notes
                    </Typography>
                    {experiment && (
                      <LabelValueTable
                        rows={getNoteRows(experiment.notes)}
                        labelWidth={200}
                      />
                    )}
                    <Box
                      sx={{
                        position: 'relative',
                      }}
                    >
                      <TextField fullWidth multiline minRows={2} />
                      <Button
                        variant="contained"
                        endIcon={<AddIcon />}
                        sx={{
                          position: 'absolute',
                          bottom: '0.5rem',
                          right: '0.5rem',
                        }}
                      >
                        Add
                      </Button>
                    </Box>
                  </Stack>
                </Paper>
                <Paper
                  sx={{
                    padding: 2,
                  }}
                >
                  <Plot
                    data={[
                      {
                        x: [1, 2, 3, 4],
                        y: [10, 15, 13, 17],
                        type: 'scatter',
                      },
                      {
                        x: [1, 2, 3, 4],
                        y: [16, 5, 11, 9],
                        type: 'scatter',
                      },
                    ]}
                    layout={{ height: 450 }}
                    useResizeHandler={true}
                    style={{ width: '100%' }}
                  />
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
