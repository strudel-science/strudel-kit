import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  AppBar,
  Box,
  Breadcrumbs,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { AppLink } from '../../../../components/AppLink';

export const Route = createFileRoute('/run-computation/_layout/$id/_layout')({
  component: ComputationLayout,
});

/**
 * Wrapper component for the steps involved in a computational run.
 * This goes from `<DataInputs>` to `<Settings>` to `<RunningComputation>` to `<Results>`.
 * These inner steps are rendered by the `<Outlet>` component.
 */
function ComputationLayout() {
  return (
    <Stack spacing={0} height="100vh">
      <Box>
        <AppBar
          color="default"
          position="static"
          sx={{
            backgroundColor: 'white',
            borderBottom: '1px solid',
            borderColor: 'neutral.main',
          }}
        >
          <Toolbar variant="dense">
            <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
              >
                <AppLink
                  underline="hover"
                  color="inherit"
                  to="/run-computation"
                  data-testid="rnc-list-link"
                >
                  {/* CUSTOMIZE: breadcrumb link */}
                  Scenario List
                </AppLink>
                <Typography color="text.primary">
                  {/* CUSTOMIZE: breadcrumb label */}
                  Optimization Scenario 1
                </Typography>
              </Breadcrumbs>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Stack>
  );
}

export default ComputationLayout;
