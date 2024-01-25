import React, { useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Link, Pagination, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { DataGrid } from '../../components/DataGrid';
import { GridEventListener } from '@mui/x-data-grid';
import { blue } from '@mui/material/colors';
import { setPreviewItem, setSearch } from '../../components/contexts/analytics/actions';
import { DataListCard } from './DataListCard';

interface DataListPanelProps {
  onToggleFiltersPanel: () => any
}

export const DataListPanel: React.FC<DataListPanelProps> = (props) => { 
  const {state, dispatch} = useAnalytics();

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
        <Box flex={1}>
          <TextField 
            variant="outlined"
            label="Search" 
            size="small"
            fullWidth
            onChange={handleSearch}
          />
        </Box>
      </Stack>
      <Stack 
        direction="row"
        sx={{
          padding: 2
        }}
      >
        <Stack flex={1}>
          {state.filteredData?.map((item, i) => (
            <DataListCard item={item} />
          ))}
        </Stack>
        {!state.previewItem && (
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: "center", 
              bgcolor: "neutral.dark", 
              height: 700,
              width: 400 
            }}
          >
            <Typography>{'<Map>'}</Typography>
          </Box>
        )}
      </Stack>
      <Pagination count={10} />
    </Paper>      
  )
}