import { FilterField } from '../../../components/FilterField';
import { Filters } from '../../../components/Filters';
import { FilterConfig } from '../../../types/filters.types';

interface FiltersPanelProps {
  filterConfigs: FilterConfig[];
  onClose: () => any;
}

/**
 * Main filters panel in the search-data-repositories Task Flow.
 * Filters are generated based on the configurations in `taskflow.pages.index.cardFilters`.
 * The input values will filter data in the `<DataListPanel>`.
 */
export const FiltersPanel: React.FC<FiltersPanelProps> = ({
  filterConfigs,
  onClose,
}) => {
  // Content to render on the page for this component
  return (
    <Filters grouped={false} onClose={onClose} sx={{ border: 'none' }}>
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
