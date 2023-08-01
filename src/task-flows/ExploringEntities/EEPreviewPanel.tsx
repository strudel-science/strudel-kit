import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormGroupProps, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAnalytics } from '../../components/Analytics/AnalyticsProvider';

interface EEPreviewPanelProps {
  onClose: () => any
}

export const EEPreviewPanel: React.FC<EEPreviewPanelProps> = (props) => {
  const {state, dispatch} = useAnalytics();

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: '100%',
        p: 2
      }}
    >
      <Stack direction="row">
        <Typography variant="h5" component="h2" flex={1}>{state.previewItem.id}</Typography>
        <IconButton onClick={props.onClose}><CloseIcon /></IconButton>
      </Stack>
    </Box>
  );
}