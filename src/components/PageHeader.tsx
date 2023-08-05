import React from 'react';
import { Box, BoxProps, Breadcrumbs, Button, Grid, Link, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface PageHeaderProps extends BoxProps {
  pageTitle: string;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  description,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Stack spacing={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            <HomeIcon />
          </Link>
          <Link
            underline="hover"
            color="inherit"
          >
            ...
          </Link>
          <Typography color="text.primary">{pageTitle}</Typography>
        </Breadcrumbs>
        <Typography variant="h4" component="h1">{pageTitle}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Stack>
    </Box>
  )
}