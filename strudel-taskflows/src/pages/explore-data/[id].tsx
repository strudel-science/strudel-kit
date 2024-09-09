import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { taskflow } from './_config/taskflow.config';
import { useQuery } from '@tanstack/react-query';

interface DataDetailPageProps {
  item: any
}

/**
 * Detail view for a selected row from the` <DataExplorer>` in the explore-data Task Flow.
 */
const DataDetailPage: React.FC<DataDetailPageProps> = ({ item }) => {
  const params = useParams();
  const dataSource = taskflow.data.detail.source;
  const dataIdField = taskflow.data.detail.idField;
  const columns = taskflow.pages.index.tableColumns;
  const queryMode = taskflow.data.detail.queryMode;
  const staticParams = taskflow.data.detail.staticParams;
  let queryParams = { ...staticParams };
  const queryString = new URLSearchParams(queryParams).toString();
  let queryFn;
  if (queryMode === 'server') {
    queryFn = async (): Promise<any> => {
      const response = await fetch(`${dataSource}/${params.id}?${queryString}`);
      return await response.json();
    }
  } else if (queryMode === 'client') {
    queryFn = async (): Promise<any> => {
      const response = await fetch(`${dataSource}?${queryString}`);
      const results = await response.json();
      return results?.find((d: any) => {
        if (params.id) {
          return d[dataIdField].toString() === params.id.toString();
        }
      });
    }
  }


  // Define query for this page and fetch data items
  const { data } = useQuery({
    queryKey: ['item', params.id, queryParams],
    queryFn,
  });

  /**
   * Content to render on the page for this component
   */
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
              padding: 2
            }}
          >
            <Stack>
              <Typography fontWeight="bold">
                {columns[1].field}
              </Typography>
              <Typography>
                {data && data[columns[1].field]}
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}

export default DataDetailPage;