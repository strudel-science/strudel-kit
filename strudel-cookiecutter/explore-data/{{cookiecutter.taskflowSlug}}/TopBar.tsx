import { AppBar, Link, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
  
export const TopBar: React.FC = () => {
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ "{{" }} mr: 2 {{ "}}" }}
        >
          <Link component={RouterLink} to="/">
            <MenuIcon />
          </Link>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ "{{" }} flexGrow: 1 {{ "}}" }}>
          {{ cookiecutter.projectName }}
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