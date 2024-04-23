import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DataFilesPanel } from './_components/DataFilesPanel';
import { MetadataPanel } from './_components/MetadataPanel';
import { taskflow } from './_config/taskflow.config';

/**
 * Page for entering information about a new dataset in the contribute-data Task Flow.
 * Includes the `<MetadataPanel>` and `<DataFilesPanel>` for adding input data.
 */
const NewDataset: React.FC = () => {  
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
              {taskflow.pages.new.title}
            </Typography>
            <Typography>
              {taskflow.pages.new.description}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Box>
              <Link component={RouterLink} to="../portal">
                <Button variant="contained" color="warning">
                  Cancel
                </Button>
              </Link>
            </Box>
            <Box>
              <Link component={RouterLink} to="../review">
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

export default NewDataset;