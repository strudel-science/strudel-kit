import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../../../components/AppLink';
import { MetadataPanel } from '../-components/MetadataPanel';
import { DataFilesPanel } from '../-components/DataFilesPanel';

export const Route = createFileRoute('/contribute-data/_layout/new')({
  component: NewDataset,
});

/**
 * Page for entering information about a new dataset in the contribute-data Task Flow.
 * Includes the `<MetadataPanel>` and `<DataFilesPanel>` for adding input data.
 */
function NewDataset() {
  return (
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
            {/* CUSTOMIZE: the new dataset page title */}
            <Typography variant="h6" component="h1">
              Upload a new dataset
            </Typography>
            {/* CUSTOMIZE: the new dataset page description */}
            <Typography>
              Mention the data contribution steps in brief, and also major
              requirements if any. Also give links to detailed documentation of
              steps, requirements and guidelines. Link to documentation.
            </Typography>
          </Stack>
          <Stack direction="row">
            <Box>
              <AppLink to="/contribute-data/portal">
                <Button
                  variant="contained"
                  color="warning"
                  data-testid="ctd-cancel-button"
                >
                  Cancel
                </Button>
              </AppLink>
            </Box>
            <Box>
              <AppLink to="/contribute-data/review">
                <Button
                  variant="contained"
                  data-testid="ctd-save-button"
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Save Dataset
                </Button>
              </AppLink>
            </Box>
          </Stack>
        </Stack>
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={7} md={12}>
              <MetadataPanel />
            </Grid>
            <Grid item lg={5} md={12}>
              <DataFilesPanel />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
