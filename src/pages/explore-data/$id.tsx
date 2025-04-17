import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { PageHeader } from '../../components/PageHeader';
import { useDetailQuery } from '../../hooks/useDetailQuery';

export const Route = createFileRoute('/explore-data/$id')({
  component: DataDetailPage,
});

/**
 * Detail view for a selected row from the` <DataExplorer>` in the explore-data Task Flow.
 */
function DataDetailPage() {
  const { id } = Route.useParams();

  // Define query for this page and fetch data item
  const { data } = useDetailQuery({
    // CUSTOMIZE: detail data source
    dataSource: 'dummy-data/exoplanets.csv',
    // CUSTOMIZE: detail data unique ID field
    dataIdField: 'Id',
    paramId: id,
    // CUSTOMIZE: query mode, 'client' or 'server'
    queryMode: 'client',
    staticParams: null,
  });

  return (
    <Box>
      <PageHeader
        // CUSTOMIZE: page header field
        pageTitle={data ? data['Planet Name'] : ''}
        // CUSTOMIZE: breadcrumb title text
        breadcrumbTitle="Data Detail"
        sx={{
          marginBottom: 1,
          padding: 2,
        }}
      />
      <Container maxWidth="xl">
        <Stack>
          {/* CUSTOMIZE: detail page content */}
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
