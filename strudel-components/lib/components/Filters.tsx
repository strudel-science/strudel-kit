import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Paper, PaperProps, Stack } from '@mui/material';
import React, { useState } from 'react';
import { FilterContext, FilterState } from './FilterContext';


interface FilterPanelProps extends PaperProps {
  onChange?: (filters: FilterState['activeFilters']) => void;
  onClose?: () => any;
  config?: any;
  header?: React.ReactNode;
  grouped?: boolean;
}

export const Filters: React.FC<FilterPanelProps> = ({
  header = 'Filters',
  grouped = true,
  onChange,
  onClose,
  config,
  children,
  ...rest
}) => { 
  const [activeFilters, setActiveFilters] = useState({});

  const handleReset = () => {
    setActiveFilters({});
  }

  return (
    <FilterContext activeFilters={activeFilters} onChange={onChange}>
      <Paper 
        elevation={0}
        variant="outlined"
        {...rest}
      >
        <Stack>
          {header && (
            <Stack 
              direction="row" 
              alignItems="center"
              sx={{
                borderBottom: '1px solid',
                borderBottomColor: 'grey.300',
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 1,
                paddingBottom: 1,
              }}
            >
              <Box flex={1}>{header}</Box>
              <Button 
                variant="outlined" 
                onClick={handleReset}
                sx={{
                  marginRight: 1,
                }}
              >
                Reset
              </Button>
              <IconButton onClick={onClose}><CloseIcon /></IconButton>
            </Stack>
          )}
          {grouped && (
            <Stack>
              {children}
            </Stack>
          )}
          {!grouped && (
            <Stack spacing={2} sx={{ padding: 2 }}>
              {children}
            </Stack>
          )}
        </Stack>
      </Paper>
    </FilterContext>
  )
}