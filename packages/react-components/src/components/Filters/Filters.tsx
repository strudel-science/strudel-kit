/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Chip,
  IconButton,
  Paper,
  PaperProps,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { FilterState } from '../FilterContext/FilterContext';
import { useFilters } from '../FilterContext/useFilters';
import { hasValue } from '../../utils';

export interface FilterPanelProps extends Omit<PaperProps, 'onChange'> {
  onChange?: (activeFilters: FilterState['activeFilters']) => void;
  onClose?: () => any;
  config?: any;
  header?: React.ReactNode;
  grouped?: boolean;
}

/**
 * Composable container for `FilterField`(s) and `FilterGroup`(s).
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
  const { activeFilters, dispatch } = useFilters();

  /**
   * Count the number of active filters in this group by using
   * the `field` prop from the FilterField children to look up
   * that filter in `activeFilters`
   */
  let activeChildren = 0;
  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement(child) &&
      (child.props as any).field &&
      hasValue(activeFilters.find((f: any) => f.field === (child.props as any).field))
    ) {
      return activeChildren++;
    }
  });

  const handleReset = () => {
    dispatch({ type: 'SET_ACTIVE_FILTERS', payload: [] });
  };

  return (
    <Paper elevation={0} variant="outlined" {...rest}>
      <Stack spacing={0}>
        {header && (
          <Stack
            direction="row"
            spacing={0}
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
              <Typography>{header}</Typography>
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
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        )}
        {grouped && <Stack spacing={0}>{children}</Stack>}
        {!grouped && (
          <Stack spacing={2} sx={{ padding: 2 }}>
            {children}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};
