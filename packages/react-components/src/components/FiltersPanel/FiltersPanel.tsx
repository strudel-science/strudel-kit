import React from 'react';
import { FilterConfig } from '../../types/filters.types';
import { FilterPanelProps, Filters } from '../Filters/Filters';
import { FilterField } from '../FilterField/FilterField';

interface FiltersPanelProps extends FilterPanelProps {
  filterConfigs: FilterConfig[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose?: () => any;
}

/**
 * Panel of filters built from a JSON configuration.
 * Uses the `Filters` component internally and renders 
 * filter objects as `FilterField` components.
 */
export const FiltersPanel: React.FC<FiltersPanelProps> = ({
  filterConfigs,
  onClose,
  ...rest
}) => {
  return (
    <Filters
      grouped={false}
      onClose={onClose}
      {...rest}
    >
      {filterConfigs.map((f, i) => (
        <FilterField
          key={`${f.field}-${i}`}
          field={f.field}
          label={f.label}
          tooltip={f.tooltip}
          units={f.units}
          operator={'contains'}
          filterComponent={f.filterComponent}
          filterProps={f.filterProps}
        />
      ))}
    </Filters>
  );
};
