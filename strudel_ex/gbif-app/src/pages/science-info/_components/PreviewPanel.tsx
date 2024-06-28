import React, { useEffect, useState } from 'react';
import { Box, Button, IconButton, Link, Paper, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';
import { LabelValueTable } from '../../../components/LabelValueTable';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useExploreData } from '../_context/ContextProvider';

interface PreviewPanelProps {
  onClose: () => any;
}

/**
 * Panel to show extra information about a row in a separate panel
 * next to the `<DataTablePanel>`.
 */
export const PreviewPanel: React.FC<PreviewPanelProps> = (props) => {
  const { state } = useExploreData(); // Access the state from the context provider
  const [relatedRows, setRelatedRows] = useState<any[]>([]); // State to hold related data rows

  // Effect to update relatedRows when state.previewItem changes
  useEffect(() => {
    if (state.previewItem) {
      const emptyRows = Array(1).fill(0); // Create an array with one empty element
      const rows = emptyRows.map((_, i) => ({
        id: i,
        family: state.previewItem['family'], 
        species: state.previewItem['species'],
        kingdom: state.previewItem['kingdom'],
      }));
      setRelatedRows(rows); // Update relatedRows state with the new data
    }
  }, [state.previewItem]); // Re-run effect when state.previewItem changes

  /**
   * Content to render on the page for this component
   */
  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        padding: 2
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Stack direction="row">
            <Typography variant="h6" component="h3" flex={1}>
              <Link component={RouterLink} to={`${state.previewItem[state.dataIdField]}`} underline="hover">
                {state.previewItem[state.columns[0].field]} {/* Display the first column field */}
              </Link>
            </Typography>
            <IconButton size="small" onClick={props.onClose}><CloseIcon /></IconButton> {/* Close button */}
          </Stack>
          <Box>
            <Typography fontWeight="medium" mb={1}>Common Name & Year of Discovery</Typography>
            <LabelValueTable 
              rows={[
                { label: 'Common Name & YOD', value: state.previewItem['genericName'] }, // Display common name and year of discovery
              ]}
            />
          </Box>
        </Stack>
        <Box>
          <Typography fontWeight="medium" mb={1}>Parallels</Typography>
          <LabelValueTable 
            rows={[
              { label: 'Latitude', value: state.previewItem['decimalLatitude'] }, // Display latitude
              { label: 'Longitude', value: state.previewItem['decimalLongitude'] }, // Display longitude
            ]}
          />
        </Box>
        <Box>
          <Typography fontWeight="medium" mb={1}>Time and Place</Typography>
          <LabelValueTable 
            rows={[
              { label: 'Year', value: state.previewItem['year'] }, // Display year
              { label: 'Region', value: state.previewItem['gbifRegion'] }, // Display GBIF region
              { label: 'Country', value: state.previewItem['country'] }, // Display country
            ]}
          />
        </Box>
        <Box>
          <Typography fontWeight="medium" mb={1}>Related Data</Typography>
          <DataGrid
            rows={relatedRows} // Set related rows data
            columns={relatedColumns as GridColDef[]} // Set columns for related data
            disableRowSelectionOnClick
            autoHeight
          />
        </Box>
        <Stack direction="row">
          <Link component={RouterLink} to={`${state.previewItem[state.dataIdField]}`}>
            <Button variant="contained">
              View details
            </Button>
          </Link>
          <Button variant="outlined">
            Export data
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

/**
 * Placeholder columns for related data table
 */
const relatedColumns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 50 
  },
  { 
    field: 'family', 
    headerName: 'Family', 
    width: 100 
  },
  { 
    field: 'species', 
    headerName: 'Species', 
    width: 100 
  },
  { 
    field: 'kingdom', 
    headerName: 'Kingdom', 
    width: 100 
  },
];

export default PreviewPanel;
