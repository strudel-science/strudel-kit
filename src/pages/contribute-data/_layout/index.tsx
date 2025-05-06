import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../../../components/AppLink';
import { LabelValueTable } from '../../../components/LabelValueTable';

export const Route = createFileRoute('/contribute-data/_layout/')({
  component: Register,
});

/**
 * Initial page for registering as a contributor in the contribute-data Task Flow.
 * After submitting, users are directed to the `<ContributorPortal>`.
 */
function Register() {
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
      }}
    >
      <Paper
        sx={{
          padding: 2,
        }}
      >
        <Stack spacing={4}>
          {/* CUSTOMIZE: the registration page title */}
          <Typography variant="h6" component="h1">
            Register as a data contributor
          </Typography>
          <Box>
            <Typography fontWeight="medium" mb={1}>
              Description
            </Typography>
            {/* CUSTOMIZE: the registration page description */}
            <Stack>
              <Typography>
                Explain data contribution process in brief, with links to proper
                documentation of steps, requirements and guidelines if any. Link
                to documentation
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Typography fontWeight="medium" mb={1}>
              Summary of Steps
            </Typography>
            {/* CUSTOMIZE: the summary of registration steps */}
            <LabelValueTable
              rows={[
                {
                  label: 'Step 1',
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                },
                {
                  label: 'Step 2',
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                },
                {
                  label: 'Step 3',
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                },
              ]}
            />
          </Box>
          <Box>
            <Typography fontWeight="medium" mb={2}>
              Registration Form
            </Typography>
            {/* CUSTOMIZE: the registration form inputs */}
            <Stack>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="organization"
                label="Organization"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="project-title"
                label="Project Title"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="project-brief"
                label="Project Brief"
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
              />
            </Stack>
          </Box>
          <Box>
            <AppLink to="/contribute-data/portal">
              <Button variant="contained" data-testid="ctd-submit-button">
                Submit Registration
              </Button>
            </AppLink>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Register;
