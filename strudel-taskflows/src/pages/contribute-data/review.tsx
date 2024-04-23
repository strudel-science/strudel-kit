import CloseIcon from '@mui/icons-material/Close';
import { Alert, Box, Button, Collapse, Container, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DatasetView } from './_components/DatasetView';
import { ValidationChecks } from './_components/ValidationChecks';
import { useContributeData } from './_context/ContextProvider';
import { finishChecks, runChecks } from './_context/actions';
import { taskflow } from './_config/taskflow.config';

/**
 * Page to review a new dataset before submitting it in the contribute-data Task Flow.
 * Users can see read-only data in the `<DatasetView>`, go back to editing, or run checks 
 * against their uploaded dataset and see validation in the `<ValidationChecks>` component.
 */
const ReviewDataset: React.FC = () => {
  const [alertOpen, setAlertOpen] = useState(true);
  const { state, dispatch } = useContributeData();

  /**
   * Simulate the checks being run using an external service
   */
  const startRunChecks = () => {
    dispatch(runChecks());
    setTimeout(() => {
      dispatch(finishChecks());
    }, 5000)
  }

  /**
   * Content to render on the page for this component
   */
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
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ 
            paddingLeft: 3,
            paddingRight: 3,
          }}
        >
          Your dataset edits have been saved.
        </Alert>
      </Collapse>
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
                {taskflow.pages.review.title}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Box>
                <Link component={RouterLink} to="../new">
                  <Button variant="contained" sx={{ whiteSpace: 'nowrap' }}>
                    Edit Dataset
                  </Button>
                </Link>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  onClick={() => startRunChecks()}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Run Checks
                </Button>
              </Box>
              {state.checksComplete && (
                <Box>
                  <Link component={RouterLink} to="../portal">
                    <Button variant="contained" sx={{ whiteSpace: 'nowrap' }}>
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

export default ReviewDataset;