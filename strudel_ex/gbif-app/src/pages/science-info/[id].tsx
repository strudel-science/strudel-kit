import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { useExploreData } from './_context/ContextProvider';
import axios from 'axios';

/**
 * Work in Progress:
 * 
 * Detail view for a selected row from the` <DataExplorer>` in the explore-data Task Flow.
 */
const DataDetailPage: React.FC = () => {
  const { state } = useExploreData();
  const params = useParams();

  // State to hold the fetched entity data
  const [entity, setEntity] = useState<any>(null);
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  // State to manage error messages
  const [error, setError] = useState<string | null>(null);

  // Fetch the entity data when the component mounts or when the id parameter changes
  useEffect(() => {
    const fetchEntity = async () => {
      if (params.id) {
        try {
          // Make a GET request to the GBIF API to fetch the occurrence data
          const response = await axios.get(`https://api.gbif.org/v1/occurrence/${params.id}`);
          setEntity(response.data); // Set the fetched data to the entity state
        } catch (err) {
          setError('Failed to fetch data'); // Set error message if the request fails
        } finally {
          setLoading(false); // Set loading to false after the request completes
        }
      }
    };
    fetchEntity();
  }, [params.id]); // Dependency array ensures this effect runs when the id parameter changes

  // Determine the title to display based on the fetched entity data
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
        {/* Display loading message while data is being fetched */}
        {loading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          // Display error message if there is an error
          <Typography>{error}</Typography>
        ) : (
          // Display the fetched entity data
          <Stack>
            <Paper
              sx={{
                padding: 2,
              }}
            >
              <Stack>
                <Typography fontWeight="bold">{state.columns[1].field}</Typography>
                <Typography>{entity && entity[state.columns[1].field]}</Typography>
              </Stack>
            </Paper>
            <Paper
              sx={{
                padding: 2,
              }}
            >
              More coming soon!
            </Paper>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default DataDetailPage;
