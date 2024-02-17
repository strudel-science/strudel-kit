import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button, Alert, Collapse } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { DataGrid } from '../../components/DataGrid';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { DataFilesPanel } from './DataFilesPanel';
import { MetadataPanel } from './MetadataPanel';
import { DatasetView } from './DatasetView';
import { ValidationChecks } from './ValidationChecks';
import { useContributeData } from './context/ContextProvider';
import { finishChecks, runChecks } from './context/actions';
  
export const ReviewDataset: React.FC = () => {
  const [alertOpen, setAlertOpen] = useState(true);
    // TODO: use context for dataset state
  const { state, dispatch } = useContributeData();

  const startRunChecks = () => {
    dispatch(runChecks());
    setTimeout(() => {
      dispatch(finishChecks());
    }, 5000)
  }

  return (
    <Box>
      <Collapse in={alertOpen}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
              {{ "}}" }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ "{{" }} 
            paddingLeft: 3,
            paddingRight: 3,
          {{ "}}" }}
        >
          Your dataset edits have been saved.
        </Alert>
      </Collapse>
      <Container
        maxWidth="xl"
        sx={{ "{{" }}
          marginBottom: 3,
          marginTop: 3,
        {{ "}}" }}
      >
        <Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography variant="h6" component="h1">
                Review your new dataset
              </Typography>
            </Stack>
            <Stack direction="row">
              <Box>
                <Link component={RouterLink} to="/contribute-data/new">
                  <Button variant="contained" sx={{ "{{" }} whiteSpace: 'nowrap' {{ "}}" }}>
                    Edit Dataset
                  </Button>
                </Link>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  onClick={() => startRunChecks()}
                  sx={{ "{{" }} whiteSpace: 'nowrap' {{ "}}" }}
                >
                  Run Checks
                </Button>
              </Box>
              {state.checksComplete && (
                <Box>
                  <Link component={RouterLink} to="/contribute-data/portal">
                    <Button variant="contained" sx={{ "{{" }} whiteSpace: 'nowrap' {{ "}}" }}>
                      Publish Dataset
                    </Button>
                  </Link>
                </Box>
              )}
            </Stack>
          </Stack>
          <Box>
            <Grid container spacing={2}>
              <Grid item md={8} sm={12}>
                <DatasetView />
              </Grid>
              <Grid item md={4} sm={12}>
                <ValidationChecks />
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}