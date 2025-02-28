import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { PageHeader } from '../../../components/PageHeader';
import { useDetailQuery } from '../../../hooks/useDetailQuery';

export const Route = createFileRoute('/task-flows/explore-data/$id')({
  component: DataDetailPage,
});

/**
 * Detail view for a selected row from the` <DataExplorer>` in the explore-data Task Flow.
 */
function DataDetailPage() {
  const { id } = Route.useParams();

  // Define query for this page and fetch data item
  const { data } = useDetailQuery({
    dataSource: 'data/default/explore-data/exoplanets.csv',
    dataIdField: 'Id',
    paramId: id,
    queryMode: 'client',
    staticParams: null,
  });

  // Content to render on the page for this component
  return (
    <Box>
      <PageHeader
        pageTitle={data ? data['Planet Name'] : ''}
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
              <Typography fontWeight="bold">Planet Name</Typography>
              <Typography>{data && data['Planet Name']}</Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
