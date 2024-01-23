import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormGroupProps, FormLabel, IconButton, Link, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { LabelValueTable } from '../../components/LabelValueTable';
import { DataGrid } from '../../components/DataGrid';

interface PreviewPanelProps {
  onClose: () => any
}

const attachedFilesColumns = [
  { 
    field: 'file_name', 
    headerName: 'File Name',
    flex: 1
  },
  { 
    field: 'file_size', 
    headerName: 'Size', 
    width: 150 
  }
];

export const PreviewPanel: React.FC<PreviewPanelProps> = (props) => {
  const {state, dispatch} = useAnalytics();
  const emptyRows = Array(25).fill(0);
  const relatedRows = emptyRows.map((d, i) => {
    return { id: i, genome: state.previewItem['Organism'], attr1: 'value', attr2: 'value', attr3: 'value'}
  })

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: '100%',
        p: 2
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Stack direction="row">
            <Typography variant="h6" component="h3" flex={1}>
              <Link component={RouterLink} to={`./${state.previewItem['id']}`} underline="hover">
                {state.previewItem['title']}
              </Link>
            </Typography>
            <IconButton size="small" onClick={props.onClose}><CloseIcon /></IconButton>
          </Stack>
          <Typography variant="body2">(Optional) Entity description or helper text.</Typography>
        </Stack>
        <Box>
          <Typography fontWeight="medium" mb={1}>Dates</Typography>
          <LabelValueTable 
            rows={[
              { label: 'Publication Date', value: state.previewItem['publication_date'] },
              { label: 'Start Date', value: state.previewItem['start_date'] },
              { label: 'End Date', value: state.previewItem['end_date'] },
            ]}
          />
        </Box>
        <Box>
          <Typography fontWeight="medium" mb={1}>Citation</Typography>
          <Typography>{state.previewItem['citation']}</Typography>
        </Box>
        <Box>
          <Typography fontWeight="medium" mb={1}>Summary</Typography>
          <Typography>{state.previewItem['summary']}</Typography>
        </Box>
        <Box>
          <Typography fontWeight="medium" mb={1}>Tags</Typography>
          <Typography>
            {state.previewItem['tags'].map((tag: string, i: number) => {
              if (i < state.previewItem['tags'].length - 1) {
                return <span>{`${tag}, `}</span>
              } else {
                return <span>{tag}</span>
              }
            })
          }</Typography>
        </Box>
        <Box>
          <Typography fontWeight="medium" mb={1}>Attached Files</Typography>
          <DataGrid
            getRowId={(row) => row['file_id']}
            rows={state.previewItem['attached_files']}
            columns={attachedFilesColumns}
            disableRowSelectionOnClick
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } }
            }}
          />
        </Box>
        <Stack direction="row">
          <Link component={RouterLink} to={`./${state.previewItem['id']}`}>
            <Button variant="contained">
              View datasets
            </Button>
          </Link>
          <Button variant="outlined">
            Download files
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}