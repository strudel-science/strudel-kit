import React, { useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Pagination, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { DataGrid } from '../../components/DataGrid';
import { GridEventListener } from '@mui/x-data-grid';
import { blue } from '@mui/material/colors';
import { setPreviewItem, setSearch } from '../../components/contexts/analytics/actions';

interface EEDataPanelProps {
  onToggleFiltersPanel: () => any
}

export const DataListPanel: React.FC<EEDataPanelProps> = (props) => { 
  const {state, dispatch} = useAnalytics();

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setSearch(evt.target.value));
  };

  const handleItemClick = (item: any) => {
    dispatch(setPreviewItem(item))
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
            <Stack 
              className={state.previewItem?.id === item.id ? 'selected' : ''}
              direction="row" 
              onClick={() => handleItemClick(item)}
              sx={{
                padding: 1,
                transition: '0.25s',
                '&:hover': {
                  bgcolor: 'neutral.light'
                },
                '&.selected': {
                  bgcolor: blue[50]
                }
              }}
            >
              <Box sx={{ bgcolor: "neutral.dark", textAlign: "center", height: 50, width: 50 }}>Image</Box>
              <Box flex={1}>
                <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>{item.title}</Typography>
                <Typography
                  sx={{
                    '-webkit-box-orient': 'vertical',
                    '-webkit-line-clamp': '2',
                    display: '-webkit-box',
                    overflow: 'hidden'
                  }}
                >
                  {item.summary}
                </Typography>
                <Typography
                  sx={{
                    '-webkit-box-orient': 'vertical',
                    '-webkit-line-clamp': '1',
                    display: '-webkit-box',
                    fontStyle: 'italic',
                    overflow: 'hidden'
                  }}
                >
                  <Typography component="span" sx={{ fontSize: 'small', fontWeight: 'bold', marginRight: 0.5 }}>Tags:</Typography>
                  {item.tags.map((tag: string, i: number) => {
                    if (i < item.tags.length -1) {
                      return <Typography component="span" sx={{ fontSize: 'small', marginRight: 0.5 }}>{tag},</Typography>
                    } else {
                      return <Typography component="span" sx={{ fontSize: 'small' }}>{tag}</Typography>
                    }
                  })}
                </Typography>                
              </Box>
            </Stack>
          ))}
        </Stack>
        {!state.previewItem && <Box sx={{ bgcolor: "neutral.dark", textAlign: "center", height: 700, width: 400 }}>Map</Box>}
      </Stack>
      <Pagination count={10} />
    </Paper>      
  )
}