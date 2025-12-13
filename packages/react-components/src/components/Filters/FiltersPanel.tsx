import React from 'react';
import { FilterConfig } from '../../types/filters.types';
import { Filters } from './Filters';
import { FilterField } from './FilterField';

interface FiltersPanelProps {
  filterConfigs: FilterConfig[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose?: () => any;
}

/**
 * Main filters panel in the explore-data Task Flow.
 * Filters are generated based on the configurations in definitions.filters.main.
 * The input values will filter data in the main table.
 */
export const FiltersPanel: React.FC<FiltersPanelProps> = ({
  filterConfigs,
  onClose,
}) => {
  return (
    <Filters
      grouped={false}
      onClose={onClose}
      sx={{
        border: 'none',
      }}
    >
      {filterConfigs.map((f, i) => (
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
  );
};
