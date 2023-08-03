import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormGroupProps, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { LabelValueTable } from '../../components/LabelValueTable';

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
      <Stack direction="row" mb={2}>
        <Typography variant="h5" component="h2" flex={1}>{state.previewItem['Organism']}</Typography>
        <IconButton onClick={props.onClose}><CloseIcon /></IconButton>
      </Stack>
      <Box mb={2}>
        <Typography fontWeight="medium" mb={1}>Metadata</Typography>
        <LabelValueTable 
          rows={[
            { label: 'Commong Name', value: state.previewItem['Common Name'] },
            { label: 'Assembly', value: state.previewItem['Assembly'] },
            { label: 'Data Usage Policy', value: state.previewItem['Data Usage Policy'] },
          ]}
        />
      </Box>
      <Box>
        <Typography fontWeight="medium" mb={1}>Metrics</Typography>
        <LabelValueTable 
          rows={[
            { label: 'Euk. BUSCO %', value: state.previewItem['Euk. BUSCO %'] },
            { label: 'Emb. BUSCO %', value: state.previewItem['Emb. BUSCO %'] },
          ]}
        />
      </Box>
    </Box>
  );
}