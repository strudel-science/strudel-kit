import React from 'react';
import { IconButton, Paper, PaperProps, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


interface FilterPanelProps extends PaperProps {
  onClose?: () => any;
}

export const Filters: React.FC<FilterPanelProps> = ({ 
  onClose,
  children,
  ...rest
}) => { 
  return (
    <Paper elevation={0} {...rest}>
      <Stack>
        <Stack direction="row" alignItems="center">
          <Typography variant="h6" component="h2" flex={1}>FILTERS</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Stack>
        <Stack>
          {children}
        </Stack>
      </Stack>
    </Paper>
  )
}