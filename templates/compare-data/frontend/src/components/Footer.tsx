import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { cleanPath } from '../utils/queryParams.utils';
import { AppLink } from './AppLink';
import { ImageWrapper } from '@strudel-science/components';

/**
 * Bottom footer component
 */
export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: 4,
      }}
    >
      <Container>
        <Grid container>
          <Grid size={{ md: 6 }}>
            <Stack
              direction="row"
              useFlexGap
              sx={{
                flexWrap: 'wrap',
              }}
            >
              <AppLink to="/">Home</AppLink>
            </Stack>
          </Grid>
          <Grid size={{ md: 6 }}>
            <Stack alignItems="center">
              <Typography>
                Describe your project, place a copyright statement, or credit
                your funding organizations.
              </Typography>
              <AppLink to="/">
                <ImageWrapper height={60}>
                  <img
                    src={cleanPath(
                      `${import.meta.env.BASE_URL}/strudel-logo-header.png`
                    )}
                  />
                </ImageWrapper>
              </AppLink>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
