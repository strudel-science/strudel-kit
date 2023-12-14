import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LabelValueTable } from '../../components/LabelValueTable';
  
export const ContributorPortal: React.FC = () => {
  return (
    <Container
        maxWidth="md"
        sx={{
          mt: 4
        }}
      >
        <Paper
          sx={{
            padding: 2
          }}
        >
          <Typography>
            Contributor Portal
          </Typography>
        </Paper>
      </Container>
  )
}