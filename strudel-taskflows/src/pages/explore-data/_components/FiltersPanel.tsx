import React from 'react';
import { FilterState, useFilters } from '../../../components/FilterContext';
import { FilterField } from '../../../components/FilterField';
import { Filters } from '../../../components/Filters';
import { taskflow } from '../_config/taskflow.config';

interface FiltersPanelProps {
  onClose: () => any
}

/**
 * Main filters panel in the explore-data Task Flow.
 * Filters are generated based on the configurations in definitions.filters.main.
 * The input values will filter data in the main table.
 */
export const FiltersPanel: React.FC<FiltersPanelProps> = (props) => { 
  const { dispatch: filterDispatch } = useFilters();

  // const handleFiltersChange = (filters: FilterState["activeFilters"]) => {
  //   filterDispatch({ type: 'SET_ACTIVE_FILTERS', payload: filters });
  //   // setActiveFilters(filters as DataFilter[])
  // }

  /**
   * Content to render on the page for this component
   */
  return (
    <Filters
      grouped={false}
      onClose={props.onClose}
      // onChange={handleFiltersChange}
      sx={{
        border: 'none'
      }}
    >
      {taskflow.pages.index.tableFilters.map((f, i) => (
        <FilterField
          key={`${f.field}-${i}`}
          field={f.field}
          label={f.label}
          operator={'contains'}
          filterComponent={f.filterComponent}
          filterProps={f.filterProps}
        />
      ))}
    </Filters>
  )
}