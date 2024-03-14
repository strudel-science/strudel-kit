import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LabelValueTable } from '../../components/LabelValueTable';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  
export const ActivityCalendar: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ "{{" }}
        marginBottom: 3,
        marginTop: 3,
      {{ "}}" }}
    >
      <Typography variant="h6" component="h1">
        2023 Experiments (Work in Progress)
      </Typography>
      {/* TODO: calendar visualization */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar readOnly />
      </LocalizationProvider>
      <Link component={RouterLink} to="list">
        List
      </Link>
    </Container>
  )
}