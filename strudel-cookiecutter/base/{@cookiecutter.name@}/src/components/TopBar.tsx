import { AppBar, IconButton, Toolbar, Typography, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { useAppState } from '../context/ContextProvider';
import { AppLink } from './AppLink';
import { routes } from '@generouted/react-router';

/**
 * Top navigation bar component
 */
export const TopBar: React.FC = () => {
  const app = useAppState();
  console.log(routes);
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Stack 
          direction="row" 
          sx={{
            alignItems: 'center',
            flexGrow: 1 ,
          }}
        >
          <AppLink to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon />
            </IconButton>
          </AppLink>
          <AppLink to="/">
            <Typography variant="h6" component="div">
              {app.state.appTitle}
            </Typography>
          </AppLink>
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
  )
}