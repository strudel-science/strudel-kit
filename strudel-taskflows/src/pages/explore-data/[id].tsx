import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { useDetailQuery } from '../../utils/useDetailQuery';
import { taskflow } from './_config/taskflow.config';

/**
 * Detail view for a selected row from the` <DataExplorer>` in the explore-data Task Flow.
 */
const DataDetailPage: React.FC = () => {
  const params = useParams();
  const dataIdField = taskflow.data.detail.idField;
  const columns = taskflow.pages.index.tableColumns;

  // Define query for this page and fetch data item
  const { data } = useDetailQuery({
    dataSource: taskflow.data.detail.source,
    dataIdField: taskflow.data.detail.idField,
    paramId: params.id,
    queryMode: taskflow.data.detail.queryMode,
    staticParams: taskflow.data.detail.staticParams,
  });

  // Content to render on the page for this component
  return (
    <Box>
      <PageHeader
        pageTitle={data ? data[dataIdField] : ''}
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
              padding: 2,
            }}
          >
            <Stack>
              <Typography fontWeight="bold">{columns[1].field}</Typography>
              <Typography>{data && data[columns[1].field]}</Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default DataDetailPage;
