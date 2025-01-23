import React from 'react';
import { Filters } from '../../../components/Filters';
import { taskflow } from '../_config/taskflow.config';
import { FilterField } from '../../../components/FilterField';

interface FiltersPanelProps {
  onClose: () => any;
}

/**
 * Main filters panel in the search-data-repositories Task Flow.
 * Filters are generated based on the configurations in `taskflow.pages.index.cardFilters`.
 * The input values will filter data in the `<DataListPanel>`.
 */
export const FiltersPanel: React.FC<FiltersPanelProps> = (props) => {
  // Content to render on the page for this component
  return (
    <Filters grouped={false} onClose={props.onClose} sx={{ border: 'none' }}>
      {taskflow.pages.index.cardFilters.map((f, i) => (
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
