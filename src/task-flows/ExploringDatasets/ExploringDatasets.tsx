import { AppBar, Box, Link, Grid, IconButton, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect, useState } from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { AnalyticsProvider, useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import * as d3 from 'd3-fetch';
import { basename } from '../../App';
  
export const ExploringDatasets: React.FC = () => {
  const [datasets, setDatasets] = useState<any[]>([]);
  console.log('datasets page')
  useEffect(() => {
    console.log(datasets);
    if (datasets.length === 0) {
      const getData = async () => {
        const data: any = await d3.json(`${basename}/data/datasets.json`);
        console.log(data);
        setDatasets(data);
      }
      getData();
    }
  }, []);

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="default" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link component={RouterLink} to="/">
                <MenuIcon />
              </Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Project name
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <AnalyticsProvider data={datasets} dataIdField='id'>
          <Outlet />
        </AnalyticsProvider>
      </Box>
    </Box>
  )
}