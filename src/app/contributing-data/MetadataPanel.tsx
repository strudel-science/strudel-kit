import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button, ListItem, List } from '@mui/material';
import React, { useEffect, useState } from 'react';
  
export const MetadataPanel: React.FC = () => {  
  return (
    <Paper>
      <Box
        sx={{
          padding: 2,
          borderBottom: '1px solid',
          borderBottomColor: 'neutral.main',
        }}
      >
        <Typography
          fontWeight="bold"
          component="h2" 
        >
          Metadata
        </Typography>
      </Box>
      <Stack direction="row">
        <Box
          component="aside"
          sx={{
            borderRight: '1px solid',
            borderRightColor: 'neutral.main',
            width: '150px',
          }}
        >
          <List>
            <ListItem>Overview</ListItem>
            <ListItem>Overview</ListItem>
            <ListItem>Overview</ListItem>
            <ListItem>Overview</ListItem>
          </List>
        </Box>
        <Box>
          <Stack>
            Overview
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}