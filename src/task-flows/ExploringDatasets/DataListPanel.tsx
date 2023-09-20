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
          {state.data?.map((item, i) => (
            <Stack direction="row">
              <Box sx={{ bgcolor: "neutral.main", textAlign: "center", height: 50, width: 50 }}>Image</Box>
              <Box flex={1}>
                <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>{item.title}</Typography>
                <Typography>{item.summary}</Typography>
                <Stack direction="row" spacing={0} sx={{ fontStyle: 'italic' }}>
                  <Typography sx={{ fontSize: 'small', fontWeight: 'bold', marginRight: 0.5 }}>Tags:</Typography>
                  {item.tags.map((tag: string, i: number) => {
                    if (i < item.tags.length -1) {
                      return <Typography sx={{ fontSize: 'small', marginRight: 0.5 }}>{tag},</Typography>
                    } else {
                      return <Typography sx={{ fontSize: 'small' }}>{tag}</Typography>
                    }
                  })}
                </Stack>
                
              </Box>
            </Stack>
          ))}
        </Stack>
        <Box sx={{ bgcolor: "neutral.main", textAlign: "center", height: 700, width: 400 }}>Map</Box>
      </Stack>
      <Pagination count={10} />
    </Paper>      
  )
}