import CloseIcon from '@mui/icons-material/Close';
import {
  Alert,
  Box,
  Button,
  Collapse,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { DatasetView } from '../-components/DatasetView';
import { ValidationChecks } from '../-components/ValidationChecks';
import { useContributeData } from '../-context/ContextProvider';
import { finishChecks, runChecks } from '../-context/actions';
import { AppLink } from '../../../components/AppLink';

export const Route = createFileRoute('/contribute-data/_layout/review')({
  component: ReviewDataset,
});

/**
 * Page to review a new dataset before submitting it in the contribute-data Task Flow.
 * Users can see read-only data in the `<DatasetView>`, go back to editing, or run checks
 * against their uploaded dataset and see validation in the `<ValidationChecks>` component.
 */
function ReviewDataset() {
  const [alertOpen, setAlertOpen] = useState(true);
  const { state, dispatch } = useContributeData();

  /**
   * Simulate the checks being run using an external service
   */
  const startRunChecks = () => {
    dispatch(runChecks());
    setTimeout(() => {
      dispatch(finishChecks());
    }, 5000);
  };

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
              {/* CUSTOMIZE: the review page title */}
              <Typography variant="h6" component="h1">
                Review your new dataset
              </Typography>
            </Stack>
            <Stack direction="row">
              <Box>
                <AppLink to="/contribute-data/new">
                  <Button
                    variant="contained"
                    data-testid="ctd-edit-button"
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    Edit Dataset
                  </Button>
                </AppLink>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  onClick={() => startRunChecks()}
                  data-testid="ctd-checks-button"
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Run Checks
                </Button>
              </Box>
              {state.checksComplete && (
                <Box>
                  <AppLink to="/contribute-data/portal">
                    <Button
                      variant="contained"
                      data-testid="ctd-publish-button"
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      Publish Dataset
                    </Button>
                  </AppLink>
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
