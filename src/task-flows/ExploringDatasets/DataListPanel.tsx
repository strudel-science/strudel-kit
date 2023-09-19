import React, { useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Pagination, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { DataGrid } from '../../components/DataGrid';
import { GridEventListener } from '@mui/x-data-grid';
import { setPreviewItem, setSearch } from '../../components/contexts/analytics/actions';

interface EEDataPanelProps {
  onToggleFiltersPanel: () => any
}

export const DataListPanel: React.FC<EEDataPanelProps> = (props) => { 
  const {state, dispatch} = useAnalytics();
  console.log(state);
  const handleRowClick: GridEventListener<'rowClick'> = (rowData) => {
    console.log(rowData);
    dispatch(setPreviewItem(rowData.row));
  };

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setSearch(evt.target.value));
  };
  
  return (
    <Paper>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          padding: 2
        }}
      >
        <Button
          startIcon={<FilterAltIcon />}
          onClick={props.onToggleFiltersPanel}
        >
          Filters
        </Button>
        <Button
          startIcon={<SortIcon />}
          onClick={props.onToggleFiltersPanel}
        >
          Sort
        </Button>
        <TextField 
          variant="outlined"
          label="Search" 
          size="small"
          onChange={handleSearch}
        />
      </Stack>
      <Stack>
        {state.data?.map((item, i) => (
          <Stack direction="row">
            <Box>Image</Box>
            <Box>
              <Typography>{item.title}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
      <Pagination count={10} />
    </Paper>      
  )
}