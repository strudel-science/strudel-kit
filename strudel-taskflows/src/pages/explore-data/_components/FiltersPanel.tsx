import { Box, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import React from 'react';
import { CheckboxList } from '../../../components/CheckboxList';
import { StrudelSlider } from '../../../components/StrudelSlider';
import { DataFilter, FilterConfig, FilterOperator } from '../../../types/filters.types';
import { useExploreData } from '../_context/ContextProvider';
import { setActiveFilters, setFilter } from '../_context/actions';
import { taskflow } from '../_config/taskflow.config';
import { FilterField, Filters } from '@strudel-science/components';
import { FilterState } from '@strudel-science/components/dist/components/FilterContext';

interface FiltersPanelProps {
  onClose: () => any
}

/**
 * Main filters panel in the explore-data Task Flow.
 * Filters are generated based on the configurations in definitions.filters.main.
 * The input values will filter data in the main table.
 */
export const FiltersPanel: React.FC<FiltersPanelProps> = (props) => { 
  const {state, dispatch} = useExploreData();

  const handleFiltersChange = (filters: FilterState["activeFilters"]) => {
    dispatch(setActiveFilters(filters as DataFilter[]));
  }

  /**
   * Content to render on the page for this component
   */
  return (
    <Filters
      grouped={false}
      onClose={props.onClose}
      onChange={handleFiltersChange}
      sx={{
        border: 'none'
      }}
    >
      {taskflow.pages.index.tableFilters.map((f, i) => (
        <FilterField
          key={`${f.field}-${i}`}
          field={f.field}
          label={f.label}
          operator={f.operator}
          filterComponent={f.filterComponent}
          filterProps={f.filterProps}
        />
      ))}
    </Filters>
  )
}