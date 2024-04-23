import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import { Box, Button, Pagination, Paper, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { DataListCard } from './DataListCard';
import { useSearchDataRepositories } from '../_context/ContextProvider';
import { setSearch } from '../_context/actions';

interface DataListPanelProps {
  onToggleFiltersPanel: () => any
}

/**
 * Show a list of filterable `<DataListCard>` components based on the data source.
 * Cards are filterable by the inputs in `<FiltersPanel>` and clicking a card will 
 * display the `<PreviewPanel>`.
 */
export const DataListPanel: React.FC<DataListPanelProps> = (props) => { 
  const {state, dispatch} = useSearchDataRepositories();

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setSearch(evt.target.value));
  };
  
  /**
   * Content to render on the page for this component
   */
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
            <DataListCard key={item[state.dataIdField]} item={item} />
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