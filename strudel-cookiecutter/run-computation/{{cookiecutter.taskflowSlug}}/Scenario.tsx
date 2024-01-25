import { AppBar, Box, Breadcrumbs, Button, Container, Grid, IconButton, Link, Paper, Stack, Step, StepLabel, Stepper, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState } from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { setPreviewItem } from '../../components/contexts/analytics/actions';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { DataGrid } from '../../components/DataGrid';
  
export const Scenario: React.FC = () => {
  return (
    <Stack spacing={0} height="100vh">
      <Box>
        <AppBar 
          color="default" 
          position="static"
          sx={{ "{{" <--$$-->
            backgroundColor: 'white',
            borderBottom: '1px solid',
            borderColor: 'neutral.main'
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ "{{" <--$$--> mr: 2 }}
            >
              <Link component={RouterLink} to="/">
                <MenuIcon />
              </Link>
            </IconButton>
            <Stack direction="row" alignItems="center" sx={{ "{{" <--$$--> flexGrow: 1 }}>
              <Typography variant="h6" component="p" sx={{ "{{" <--$$--> marginRight: 2 }}>
                {{ cookiecutter.projectName }}
              </Typography>
              <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRightIcon fontSize="small" />}>
                <Link underline="hover" color="inherit" to="/run-computation" component={RouterLink}>
                  Scenario List
                </Link>
                <Typography color="text.primary">Optimization Scenario 1</Typography>
              </Breadcrumbs>
            </Stack>
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
      <Outlet />
    </Stack>
  )
}