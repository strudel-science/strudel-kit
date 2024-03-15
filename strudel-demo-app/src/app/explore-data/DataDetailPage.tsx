import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { useExploreData } from './context/ContextProvider';

/**
 * Work in Progress:
 * 
 * Detail view for a selected row from the` <DataExplorer>` in the explore-data Task Flow.
 */
export const DataDetailPage: React.FC = () => {
  const {state, dispatch} = useExploreData();
  const params = useParams();

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <PageHeader
        pageTitle="Detail"
        breadcrumbTitle="Data Detail"
        sx={{
          marginBottom: 1,
          padding: 2,
        }}
      />
      <Container maxWidth="xl">
        Coming soon!
      </Container>
    </Box>
  )
}