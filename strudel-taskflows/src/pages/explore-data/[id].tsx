import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { taskflow } from './_config/taskflow.config';

/**
 * Work in Progress:
 * 
 * Detail view for a selected row from the` <DataExplorer>` in the explore-data Task Flow.
 */
const DataDetailPage: React.FC = () => {
  const params = useParams();
  const dataIdField = taskflow.data.items.idField;
  const columns = taskflow.pages.index.tableColumns;
  const data: any[] = [];
  const entity = data?.find((d) => {
    if (params.id) {
      return d[dataIdField].toString() === params.id.toString();
    }
  });
  const entityTitle = entity ? entity[columns[0].field] : 'Not Found';

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
                {columns[1].field}
              </Typography>
              <Typography>
                {entity && entity[columns[1].field]}
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