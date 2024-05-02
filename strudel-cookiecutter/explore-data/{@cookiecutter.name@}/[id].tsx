import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { useExploreData } from './_context/ContextProvider';

/**
 * Work in Progress:
 * 
 * Detail view for a selected row from the` <DataExplorer>` in the explore-data Task Flow.
 */
const DataDetailPage: React.FC = () => {
  const {state, dispatch} = useExploreData();
  const params = useParams();
  const entity = state.data?.find((d) => {
    if (params.id) {
      return d[state.dataIdField].toString() === params.id.toString();
    }
  });
  console.log(state);
  console.log(entity);
  const entityTitle = entity ? entity[state.columns[0].field] : 'Not Found';

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <PageHeader
        pageTitle={entityTitle}
        breadcrumbTitle="Data Detail"
        sx={{
          marginBottom: 1,
          padding: 2,
        }}
      />
      <Container maxWidth="xl">
        <Stack>
          <Paper
            sx={{
              padding: 2
            }}
          >
            <Stack>
              <Typography fontWeight="bold">
                {state.columns[1].field}
              </Typography>
              <Typography>
                {entity && entity[state.columns[1].field]}
              </Typography>
            </Stack>
          </Paper>
          <Paper
            sx={{
              padding: 2
            }}
          >
            More coming soon!
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}

export default DataDetailPage;