import { AppBar, Link, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAppState } from '../context/ContextProvider';
  
/**
 * Top navigation bar component
 */
export const TopBar: React.FC = () => {
  const app = useAppState();
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Link component={RouterLink} to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Link>
        <Typography variant="h6" component="div" sx={{ "{{" }} flexGrow: 1 {{ "}}" }}>
          {app.state.projectTitle}
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
  )
}