import React from 'react';
import { Filters } from '../../components/Filters';
import { FilterField } from '../../components/FilterField';
import { CheckboxList, CheckboxOption } from '../../components/CheckboxList';
import { setFilter } from '../../components/contexts/analytics/actions';
import { FilterConfig, useExploreData } from './context/ContextProvider';
import { StrudelSlider } from '../../components/StrudelSlider';

interface FiltersPanelProps {
  onClose: () => any
}

export const FiltersPanel: React.FC<FiltersPanelProps> = (props) => { 
  const {state, dispatch} = useExploreData();
  
  const assmeblyOptions: CheckboxOption[] = [];
  state.data?.forEach((d) => {
    if (d['Assembly'] && assmeblyOptions.filter((o) => o.value === d['Assembly']).length === 0) {
      assmeblyOptions.push({ label: d['Assembly'], value: d['Assembly'] });
    }
  });

  const getFilterComponent = (filter: FilterConfig) => {
    switch (filter.filterType) {
      case 'CheckboxList': {
        return (
          <CheckboxList
            options={filter.props.options}
            onChange={(values) => dispatch(setFilter({ field: filter.field, value: values, operator: 'contains one of' }))}
          />
        );
      }
      case 'Slider': {
        return (
          <StrudelSlider
            getAriaLabel={() => filter.field}
            valueLabelDisplay="auto"
            min={filter.props.min}
            max={filter.props.max}
            onChangeCommitted={(event, values) => dispatch(setFilter({ field: filter.field, value: values, operator: 'range' }))}
          />
        );
      }
      default: {
        return null;
      }
    }
  }

  return (
    <Filters
      onClose={props.onClose}
      sx={{
        pt: 3,
        pb: 3,
        pl: 2,
        pr: 2
      }}
    >
      {state.filters.map((f, i) => (
        <FilterField
          key={`${f.field}-${i}`}
          label={f.displayName}
          isCollapsible
          filter={getFilterComponent(f)}
        />
      ))}
    </Filters>
  )
}