import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppBar, Box, Breadcrumbs, Link, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { taskflow } from '../_config/taskflow.config';
  
/**
 * Wrapper component for the steps involved in a computational run.
 * This goes from `<DataInputs>` to `<Settings>` to `<RunningComputation>` to `<Results>`.
 * These inner steps are rendered by the `<Outlet>` component.
 */
const ComputationLayout: React.FC = () => {
  return (
    <Stack spacing={0} height="100vh">
      <Box>
        <AppBar 
          color="default" 
          position="static"
          sx={{
            backgroundColor: 'white',
            borderBottom: '1px solid',
            borderColor: 'neutral.main'
          }}
        >
          <Toolbar variant="dense">
            <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
              <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRightIcon fontSize="small" />}>
                <Link underline="hover" color="inherit" to=".." component={RouterLink}>
                  {taskflow.properties.itemName} List
                </Link>
                <Typography color="text.primary">Optimization Scenario 1</Typography>
              </Breadcrumbs>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Stack>
  )
}

export default ComputationLayout;