import { AppBar, IconButton, Toolbar, Typography, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { AppLink } from './AppLink';
import { config } from '../../strudel.config';
import { ImageWrapper } from './ImageWrapper';
import { cleanPath } from '../utils/queryParams.utils';

/**
 * Top navigation bar component
 */
export const TopBar: React.FC = () => {
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <AppLink to="/">
            {!config.navbar.logo && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <HomeIcon />
              </IconButton>
            )}
            {config.navbar.logo && (
              <ImageWrapper height={30}>
                <img
                  src={cleanPath(
                    `${import.meta.env.BASE_URL}/${config.navbar.logo}`
                  )}
                />
              </ImageWrapper>
            )}
          </AppLink>
          <AppLink to="/">
            <Typography variant="h6" component="div" fontWeight="bold">
              {config.navbar.title}
            </Typography>
          </AppLink>
        </Stack>
        <IconButton size="large" edge="start" color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
