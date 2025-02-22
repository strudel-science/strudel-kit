import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { PageHeader } from '../../components/PageHeader';
import { useDetailQuery } from '../../utils/useDetailQuery';
import { taskflow } from '../../pages/explore-data/_config/taskflow.config';

export const Route = createFileRoute('/explore-data/$id')({
  component: DataDetailPage,
});

/**
 * Detail view for a selected row from the` <DataExplorer>` in the explore-data Task Flow.
 */
function DataDetailPage() {
  const { id } = Route.useParams();
  const dataIdField = taskflow.data.detail.idField;
  const columns = taskflow.pages.index.tableColumns;

  // Define query for this page and fetch data item
  const { data } = useDetailQuery({
    dataSource: taskflow.data.detail.source,
    dataIdField: taskflow.data.detail.idField,
    paramId: id,
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
}
