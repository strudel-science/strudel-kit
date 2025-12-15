import { Box, Paper, Stack, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { LabelValueTable } from '../../../components/LabelValueTable';
import { files } from './DataFilesPanel';

// CUSTOMIZE: columns for the dataset files table
const columns: GridColDef[] = [
  {
    field: 'filename',
    headerName: 'File Name',
    width: 150,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
  },
  {
    field: 'size',
    headerName: 'Size',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
  },
];

/**
 * Panel to display data entered from the `<MetadataPanel>` and the `<DataFilesPanel>` from
 * the previous step in contribute-data (not currently hooked together).
 * This component is rendered as part of the `<ReviewDataset>` page.
 */
export const DatasetView: React.FC = () => {
  return (
    <Paper
      sx={{
        height: '100%',
        padding: 2,
      }}
    >
      <Stack>
        {/* CUSTOMIZE: the dataset title */}
        <Typography component="h2" variant="h6">
          My Dataset
        </Typography>
        {/* CUSTOMIZE: the dataset description */}
        <Typography>
          Laboris incididunt ullamco dolore ex. Non ad aute cillum excepteur.
          Quis exercitation duis quis ad. Laborum eiusmod incididunt magna dolor
          eiusmod cupidatat non veniam sit consequat anim esse. Dolore fugiat
          incididunt et qui dolore dolor. Ut aute dolore magna ea commodo
          ullamco velit in aliquip sunt id ea.
        </Typography>
        {/* CUSTOMIZE: the dataset metadata */}
        <LabelValueTable
          rows={[
            {
              label: 'DOI',
              value: 'http://dx.doi.org/10.123432/NGT/XXXXXXX',
            },
            {
              label: 'Start Date',
              value: '1 January 2023',
            },
            {
              label: 'End Date',
              value: '1 November 2023',
            },
            {
              label: 'Category',
              value: 'Groundwater',
            },
          ]}
        />
        <Box>
          <Typography component="h3" fontWeight="bold">
            Dataset Files
          </Typography>
          <DataGrid
            // CUSTOMIZE: the data source for the dataset files table
            rows={files}
            // CUSTOMIZE: the data id field
            getRowId={(row) => row.id}
            columns={columns}
            disableColumnSelector
            disableRowSelectionOnClick
          />
        </Box>
      </Stack>
    </Paper>
  );
};
