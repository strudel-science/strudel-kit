import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

interface DataViewHeaderProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  onToggleFiltersPanel: () => void;
}

/**
 * Data table header section with filters button and search bar
 */
export const DataViewHeader: React.FC<DataViewHeaderProps> = ({
  searchTerm,
  setSearchTerm,
  onToggleFiltersPanel,
}) => {
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{
        overflow: 'hidden',
        padding: 2,
      }}
    >
      <Typography variant="h6" component="h2" flex={1}>
        Entity List
      </Typography>
      <Button startIcon={<FilterListIcon />} onClick={onToggleFiltersPanel}>
        Filters
      </Button>
      <TextField
        variant="outlined"
        label="Search"
        size="small"
        value={searchTerm}
        onChange={handleSearch}
      />
    </Stack>
  );
};
