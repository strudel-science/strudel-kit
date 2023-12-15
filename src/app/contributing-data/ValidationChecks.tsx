import { AppBar, Link, IconButton, Toolbar, Typography, Container, Paper, Stack, Box, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';
  
export const ValidationChecks: React.FC = () => {  
  return (
    <Paper
      sx={{
        padding: 2
      }}
    >
      <Stack>
        <Typography
          component="h2"
          variant="h6"
        >
          Validation Checks
        </Typography>
        <Typography>
          Running the dataset metadata and datafile against our standard set of metadata, data and congruency checks helps to validate the data and find potential issues with format or compatibility. 
        </Typography>
        <Typography>
          These checks help to improve discoverability and reusability of your research data, and also fastens the process of verifying the data for the public release.
        </Typography>
        <Typography>
          We run checks to gauge the following aspects of uploaded dataset.
        </Typography>
        <Box>
          <Typography fontWeight="bold">
            Findability
          </Typography>
          <Typography>
            Occaecat commodo velit aliqua consectetur id tempor amet aliqua.
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold">
            Accessibility
          </Typography>
          <Typography>
            Et labore aliqua proident velit exercitation ullamco ad deserunt velit commodo aliquip esse consectetur.
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold">
            Interoperability
          </Typography>
          <Typography>
            Ex deserunt Lorem enim adipisicing dolor esse voluptate exercitation.
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold">
            Reusability
          </Typography>
          <Typography>
            Nulla sint amet ullamco laborum cillum cupidatat irure excepteur mollit ut amet.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}