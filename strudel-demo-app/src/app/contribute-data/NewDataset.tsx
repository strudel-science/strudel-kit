import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DataFilesPanel } from './DataFilesPanel';
import { MetadataPanel } from './MetadataPanel';

/**
 * Page for entering information about a new dataset in the contribute-data Task Flow.
 * Includes the `<MetadataPanel>` and `<DataFilesPanel>` for adding input data.
 */
export const NewDataset: React.FC = () => {  
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
            <Typography variant="h6" component="h1">
              {/* strudel-kit-variable-next-line */}
              Upload a new dataset
            </Typography>
            <Typography>
              {/* strudel-kit-variable-next-line */}
              Mention the data contribution steps in brief, and also major requirements if any. Also give links to detailed documentation of steps, requirements and guidelines. Link to documentation.
            </Typography>
          </Stack>
          <Stack direction="row">
            <Box>
              <Link component={RouterLink} to="/contribute-data/portal">
                <Button variant="contained" color="warning">
                  Cancel
                </Button>
              </Link>
            </Box>
            <Box>
              <Link component={RouterLink} to="/contribute-data/review">
                <Button variant="contained" sx={{ whiteSpace: 'nowrap' }}>
                  Save Dataset
                </Button>
              </Link>
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