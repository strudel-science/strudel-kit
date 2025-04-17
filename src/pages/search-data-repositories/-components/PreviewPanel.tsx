import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { AppLink } from '../../../components/AppLink';
import { LabelValueTable } from '../../../components/LabelValueTable';

/**
 * Placeholder columns for attached files table
 */
const attachedFilesColumns: GridColDef[] = [
  {
    field: 'file_name',
    headerName: 'File Name',
    flex: 1,
  },
  {
    field: 'file_size',
    headerName: 'Size',
    type: 'number',
    width: 150,
  },
];

/**
 * Placeholder rows for attached files table
 */
const attachedFiles = [
  {
    file_name: 'file1.csv',
    file_size: '15 MB',
  },
  {
    file_name: 'file2.json',
    file_size: '117 MB',
  },
  {
    file_name: 'file3.json',
    file_size: '4 MB',
  },
];

interface PreviewPanelProps {
  /**
   * Data for the selected card from the main list
   */
  previewItem: any;
  /**
   * Function to handle hiding
   */
  onClose: () => void;
}

/**
 * Panel to show extra information about a card in a separate panel
 * next to the `<DataListPanel>`.
 */
export const PreviewPanel: React.FC<PreviewPanelProps> = ({
  previewItem,
  onClose,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        padding: 2,
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Stack direction="row">
            <Typography variant="h6" component="h3" flex={1}>
              <AppLink
                to="/search-data-repositories/$id"
                params={{ id: previewItem.id }}
                underline="hover"
              >
                {previewItem.title}
              </AppLink>
            </Typography>
            <IconButton size="small" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2">
            (Optional) Entity description or helper text.
          </Typography>
        </Stack>
        <Box>
          <Typography fontWeight="medium" mb={1}>
            Dates
          </Typography>
          <LabelValueTable
            rows={[
              { label: 'Publication Date', value: '2019-01-01' },
              { label: 'Start Date', value: '2019-01-01' },
              { label: 'End Date', value: '2019-01-01' },
            ]}
          />
        </Box>
        <Box>
          <Typography fontWeight="medium" mb={1}>
            Citation
          </Typography>
          <Typography>
            Labore proident do aute et esse adipisicing veniam eiusmod culpa
            pariatur sunt officia.
          </Typography>
        </Box>
        {previewItem.summary && (
          <Box>
            <Typography fontWeight="medium" mb={1}>
              Summary
            </Typography>
            <Typography>{previewItem.summary}</Typography>
          </Box>
        )}
        {previewItem.tags && (
          <Box>
            <Typography fontWeight="medium" mb={1}>
              Tags
            </Typography>
            <Typography>
              {previewItem.tags.map((tag: string, i: number) => {
                if (previewItem.tags && i < previewItem.tags.length - 1) {
                  return <span key={`${tag}-${i}`}>{`${tag}, `}</span>;
                } else {
                  return <span key={`${tag}-${i}`}>{tag}</span>;
                }
              })}
            </Typography>
          </Box>
        )}
        <Box>
          <Typography fontWeight="medium" mb={1}>
            Attached Files
          </Typography>
          <DataGrid
            getRowId={(row) => row.file_name}
            rows={attachedFiles}
            columns={attachedFilesColumns}
            disableRowSelectionOnClick
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
          />
        </Box>
        <Stack direction="row">
          <AppLink
            to="/search-data-repositories/$id"
            params={{ id: previewItem.id }}
          >
            <Button variant="contained">View datasets</Button>
          </AppLink>
          <Button variant="outlined">Download files</Button>
        </Stack>
      </Stack>
    </Paper>
  );
};
