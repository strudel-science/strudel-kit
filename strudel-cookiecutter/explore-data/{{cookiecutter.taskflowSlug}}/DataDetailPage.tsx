import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { PageHeader } from '../../components/PageHeader';
  
export const DataDetailPage: React.FC = () => {
  const {state, dispatch} = useAnalytics();
  const params = useParams();

  return (
    <Box>
      <PageHeader
        pageTitle="Detail"
        breadcrumbTitle="Data Detail"
        mb={1}
        p={2}
        sx={{ "{{" }}
          backgroundColor: 'white'
        {{ "}}" }}
      />
      <Container maxWidth="xl">
        Coming soon!
      </Container>
    </Box>
  )
}