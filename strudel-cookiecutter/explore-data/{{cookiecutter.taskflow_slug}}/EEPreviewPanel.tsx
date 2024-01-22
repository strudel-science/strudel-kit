import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormGroupProps, FormLabel, IconButton, Link, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { LabelValueTable } from '../../components/LabelValueTable';
import { DataGrid } from '../../components/DataGrid';

interface EEPreviewPanelProps {
  onClose: () => any
}

const relatedColumns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 50 
  },
  { 
    field: 'genome', 
    headerName: 'Genome', 
    width: 150 
  },
  { 
    field: 'attr1', 
    headerName: 'Attribute 1', 
    width: 100 
  },
  { 
    field: 'attr2', 
    headerName: 'Attribute 2', 
    width: 100 
  },
  { 
    field: 'attr3', 
    headerName: 'Attribute 3', 
    width: 100 
  },
];

export const EEPreviewPanel: React.FC<EEPreviewPanelProps> = (props) => {
  const {state, dispatch} = useAnalytics();
  const emptyRows = Array(25).fill(0);
  const relatedRows = emptyRows.map((d, i) => {
    return { id: i, genome: state.previewItem['Organism'], attr1: 'value', attr2: 'value', attr3: 'value'}
  })

  return (
    <Box
      sx={{ "{{" }}
        backgroundColor: 'white',
        height: '100%',
        p: 2
      {{ "}}" }}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Stack direction="row">
            <Typography variant="h6" component="h3" flex={1}>
              <Link href="#" underline="hover">
                {state.previewItem['Organism']}
              </Link>
            </Typography>
            <IconButton size="small" onClick={props.onClose}><CloseIcon /></IconButton>
          </Stack>
          <Typography variant="body2">(Optional) Entity description or helper text.</Typography>
        </Stack>
        <Box>
          <Typography fontWeight="medium" mb={1}>Attributes</Typography>
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
        <Box>
          <Typography fontWeight="medium" mb={1}>Related Data</Typography>
          <DataGrid
            rows={relatedRows}
            columns={relatedColumns}
            disableRowSelectionOnClick
            initialState={{ "{{" }}
              pagination: { paginationModel: { pageSize: 5 } }
            {{ "}}" }}
          />
        </Box>
        <Stack direction="row">
            <Button variant="contained">
              View entity
            </Button>
            <Button variant="outlined">
              Export entity data
            </Button>
        </Stack>
      </Stack>
    </Box>
  );
}