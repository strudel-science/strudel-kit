import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Grid, IconButton, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridComparatorFn } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import React from 'react';
import Plot from 'react-plotly.js';
import { Link as RouterLink } from 'react-router-dom';
import { LabelValueTable } from '../../components/LabelValueTable';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { taskflow } from './_config/taskflow.config';

/**
 * Detail view of the selected activity from `<ActivityList>` in monitor-activities Task Flow.
 * The two components are not currently hooked together.
 */
const ActivityDetail: React.FC = () => {
  const experiment = useDataFromSource(taskflow.data.detail.source);

  const getNoteRows = (notes: any[]) => {
    return notes.map((note) => {
      note.label = note.created_time;
      note.value = note.content;
      return note;
    });
  }

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
          <Link component={RouterLink} to="../">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link> 
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
                    padding: 2
                  }}
                >
                  <Stack>
                    <Typography>Notes</Typography>
                    {experiment && (
                      <LabelValueTable
                        rows={getNoteRows(experiment.notes)}
                        labelWidth={200}
                      />
                    )}
                    <Box
                      sx={{
                        position: 'relative'
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
                    padding: 2
                  }}
                >
                  <Plot
                    data={[
                      {
                        x: [1, 2, 3, 4],
                        y: [10, 15, 13, 17],
                        type: 'scatter'
                      },
                      {
                        x: [1, 2, 3, 4],
                        y: [16, 5, 11, 9],
                        type: 'scatter'
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

const dateComparator: GridComparatorFn<string> = (v1, v2) => {
  return dayjs(v1).isAfter(dayjs(v2)) ? 1 : 0;
};

const columns: GridColDef[] = [
  { 
    field: 'event_type', 
    headerName: 'Event Type', 
    width: 200 
  },
  { 
    field: 'event_time', 
    headerName: 'Event Time',
    sortComparator: dateComparator,
    width: 200 
  },
  { 
    field: 'confidence', 
    headerName: 'Confidence', 
    type: 'number',
    width: 200 
  }
];

export default ActivityDetail;