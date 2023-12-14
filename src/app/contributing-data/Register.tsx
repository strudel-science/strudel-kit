import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LabelValueTable } from '../../components/LabelValueTable';
  
export const Register: React.FC = () => {
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
          <Stack spacing={4}>
            <Typography 
              variant="h6" 
              component="h1" 
            >
              Register as a data contributor
            </Typography>
            <Box>
              <Typography fontWeight="medium" mb={1}>
                Description
              </Typography>
              {/* TODO: Make it easier to render text as multiple paragraphs (maybe support markdown in certain components) */}
              <Stack>
                <Typography>
                  Explain data contribution process in brief, with links to proper documentation of steps, requirements and guidelines if any. Link to documentation
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </Typography>
              </Stack>
            </Box>
            <Box> 
              <Typography fontWeight="medium" mb={1}>
                Summary of Steps
              </Typography>
              <LabelValueTable
                rows={[
                  {
                    label: 'Step 1',
                    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed '
                  },
                  {
                    label: 'Step 2',
                    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed '
                  },
                  {
                    label: 'Step 3',
                    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed '
                  }
                ]}
              />
            </Box>
            <Box>
              <Typography fontWeight="medium" mb={1}>
                Registration Form
              </Typography>
              <Grid container rowSpacing={2} alignItems="center">
                <Grid item md={2}>
                  <Typography>Email</Typography>
                </Grid>
                <Grid item md={9}>
                  <TextField id="email" variant="outlined" fullWidth />
                </Grid>
                <Grid item md={2}>
                  <Typography>First name</Typography>
                </Grid>
                <Grid item md={9}>
                  <TextField id="first-name" variant="outlined" fullWidth />
                </Grid>
                <Grid item md={2}>
                  <Typography>Last name</Typography>
                </Grid>
                <Grid item md={9}>
                  <TextField id="last-name" variant="outlined" fullWidth />
                </Grid>
                <Grid item md={2}>
                  <Typography>Organization</Typography>
                </Grid>
                <Grid item md={9}>
                  <TextField id="organization" variant="outlined" fullWidth />
                </Grid>
                <Grid item md={2}>
                  <Typography>Project name</Typography>
                </Grid>
                <Grid item md={9}>
                  <TextField id="project-name" variant="outlined" fullWidth />
                </Grid>
                <Grid item md={2}>
                  <Typography>Project brief</Typography>
                </Grid>
                <Grid item md={9}>
                  <TextField id="project-brief" variant="outlined" fullWidth multiline />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Link component={RouterLink} to="/contributing-data/portal">
                <Button variant="contained">
                  Submit Registration
                </Button>
              </Link>
            </Box>
          </Stack>
        </Paper>
      </Container>
  )
}