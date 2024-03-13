import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Breadcrumbs, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { useAppState } from '../../context/ContextProvider';
  
export const Scenario: React.FC = () => {
  const app = useAppState();
  return (
    <Stack spacing={0} height="100vh">
      <Box>
        <AppBar 
          color="default" 
          position="static"
          sx={{
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
              sx={{ mr: 2 }}
            >
              <Link component={RouterLink} to="/">
                <MenuIcon />
              </Link>
            </IconButton>
            <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="p" sx={{ marginRight: 2 }}>
                {app.state.appTitle}
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