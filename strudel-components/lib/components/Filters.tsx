import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Chip, IconButton, Paper, PaperProps, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FilterContext, FilterState } from './FilterContext';
import { hasValue } from './FilterField';

interface FilterPanelProps extends PaperProps {
  onChange?: (filters: FilterState['activeFilters']) => void;
  onClose?: () => any;
  config?: any;
  header?: React.ReactNode;
  grouped?: boolean;
}

/**
 * Container panel for FilterField(s) and FilterGroup(s).
 * Acts as a multi-dimensional input where you can monitor 
 * the active state of all filters contained inside the component.
 */
export const Filters: React.FC<FilterPanelProps> = ({
  header = 'Filters',
  grouped = true,
  onChange,
  onClose,
  config,
  children,
  ...rest
}) => { 
  const [activeFilters, setActiveFilters] = useState<any>({});

  /**
   * Count the number of active filters in this group by using
   * the `field` prop from the FilterField children to look up
   * that filter in `activeFilters` 
   */
  let activeChildren = 0;
  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement(child) &&
      child.props.field &&
      hasValue(activeFilters[child.props.field])
    ) {
      return activeChildren++
    }
  })

  const handleChange = (filters: FilterState['activeFilters']) => {
    setActiveFilters(filters);
  }

  const handleReset = () => {
    setActiveFilters({});
  }

  useEffect(() => {
    if (onChange) onChange(activeFilters);
  }, [activeFilters])

  return (
    <FilterContext activeFilters={activeFilters} onChange={handleChange}>
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
              <Stack direction="row" spacing={2} flex={1}>
                <Box>{header}</Box>
                {activeChildren > 0 && (
                  <Chip 
                    label={`${activeChildren} active`} 
                    color="primary" 
                    size="small" 
                  />
                )}
              </Stack>
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