import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useExploreData } from '../_context/ContextProvider';
import { setSearch } from '../_context/actions';

interface DataViewHeaderProps {
  onToggleFiltersPanel: () => void;
}

/**
 * Data table header section with filters button and search bar
 */
export const DataViewHeader: React.FC<DataViewHeaderProps> = ({
  onToggleFiltersPanel,
}) => {
  const { dispatch } = useExploreData();

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setSearch(evt.target.value));
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{
        padding: 2
      }}
    >
      <Typography variant="h6" component="h2" flex={1}>Entity List</Typography>
      <Button
        startIcon={<FilterListIcon />}
        onClick={onToggleFiltersPanel}
      >
        Filters
      </Button>
      <TextField 
        variant="outlined"
        label="Search" 
        size="small"
        onChange={handleSearch}
      />
    </Stack>
  )
}