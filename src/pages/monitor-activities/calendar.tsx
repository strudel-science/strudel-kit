import { Container, Typography } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppLink } from '../../components/AppLink';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/monitor-activities/calendar')({
  component: ActivityCalendar,
});

/**
 * Work in Progress:
 *
 * Page to see all activities by day in a calendar view in the monitor-activities Task Flow.
 */
function ActivityCalendar() {
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
      <AppLink to="..">List</AppLink>
    </Container>
  );
}
