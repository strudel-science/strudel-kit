import { Container, Link, Typography } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

/**
 * Work in Progress:
 * 
 * Page to see all activities by day in a calendar view in the monitor-activities Task Flow.
 */
const ActivityCalendar: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginBottom: 3,
        marginTop: 3,
      }}
    >
      <Typography variant="h6" component="h1">
        2023 Experiments (Work in Progress)
      </Typography>
      {/* TODO: calendar visualization */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar readOnly />
      </LocalizationProvider>
      <Link component={RouterLink} to="../">
        List
      </Link>
    </Container>
  )
}

export default ActivityCalendar;