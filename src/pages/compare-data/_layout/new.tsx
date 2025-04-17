import { Box, Button, Container, Paper, Stack } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { AppLink } from '../../../components/AppLink';
import { PageHeader } from '../../../components/PageHeader';
import { useCompareData } from '../-context/ContextProvider';
import { setComparing } from '../-context/actions';

export const Route = createFileRoute('/compare-data/_layout/new')({
  component: NewScenario,
});

/**
 * Page for filling out a form for adding a new item to
 * the main list in the compare-data Task Flow.
 */
function NewScenario() {
  const { dispatch } = useCompareData();

  /**
   * Set comparing to true whenever this page renders.
   * Set it back to false when the component is torn down.
   */
  useEffect(() => {
    dispatch(setComparing(true));
    return () => {
      dispatch(setComparing(false));
    };
  }, []);

  return (
    <Box>
      <PageHeader
        // CUSTOMIZE: the title that displays at the top of the page
        pageTitle="New Scenario"
        // CUSTOMIZE: the subtitle that displays underneath the title
        description="Description of this app section"
        actions={
          <Stack direction="row">
            <Box>
              <AppLink to="..">
                <Button
                  variant="contained"
                  color="warning"
                  data-testid="cpd-cancel-button"
                >
                  Cancel
                </Button>
              </AppLink>
            </Box>
            <Box>
              <AppLink to="..">
                {/* CUSTOMIZE: the save button text */}
                <Button variant="contained" data-testid="cpd-save-button">
                  Save scenario
                </Button>
              </AppLink>
            </Box>
          </Stack>
        }
        sx={{
          padding: 3,
          backgroundColor: 'white',
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <Paper
          sx={{
            padding: 2,
          }}
        >
          {/* CUSTOMIZE: form elements */}
          Work in progress
        </Paper>
      </Container>
    </Box>
  );
}
