import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as d3 from 'd3-fetch';
import { Stack, Link, Container, Paper, List, ListItem, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const TaskFlowsPage: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      <Paper
        sx={{
          padding: 2
        }}
      >
        <Box
          component="aside"
          sx={{ 
            position: 'relative', 
            width: '250px' 
          }}
        >
          <List>
            <NavListItem>
              <Link component={RouterLink} to="compare-data">
                Compare Data
              </Link>
            </NavListItem>
            <NavListItem>
              <Link component={RouterLink} to="contribute-data">
                Contribute Data
              </Link>
            </NavListItem>
            <NavListItem>
              <Link component={RouterLink} to="explore-data">
                Explore Data
              </Link>
            </NavListItem>
            <NavListItem>
              <Link component={RouterLink} to="monitor-activities">
                Monitor Activities
              </Link> 
            </NavListItem>
            <NavListItem>
              <Link component={RouterLink} to="run-computation">
                Run Computation
              </Link> 
            </NavListItem>
            <NavListItem>
              <Link component={RouterLink} to="search-data-repositories">
                Search Data Repositories
              </Link>
            </NavListItem>
          </List>
        </Box>
      </Paper>
    </Container>
  )
}

const NavListItem: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ListItem
      sx={{
        padding: 0,
      }}
    >
      <Typography
        sx={{
          padding: '0.5rem 1rem',
          color: 'neutral.main',
          fontSize: '1.125rem',
          fontWeight: 'bold',
        }}
      >
        {children}
      </Typography>
    </ListItem>
  )
}