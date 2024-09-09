import React from 'react';
import { PaperProps, Breadcrumbs, Link, Paper, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface PageHeaderProps extends PaperProps {
  pageTitle: React.ReactNode;
  breadcrumbTitle?: string;
  description?: string;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  breadcrumbTitle,
  description,
  actions,
  ...rest
}) => {
  return (
    <Paper elevation={0} {...rest}>
      <Stack direction="row" justifyContent="space-between">
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
            <Typography color="text.primary">{breadcrumbTitle || pageTitle}</Typography>
          </Breadcrumbs>
          <Typography variant="h4" component="h1">{pageTitle}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Stack>
        {actions}
      </Stack>
    </Paper>
  )
}