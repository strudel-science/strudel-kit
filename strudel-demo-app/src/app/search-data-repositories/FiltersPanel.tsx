import React from 'react';
import { Filters } from '../../components/Filters';
import { FilterField } from '../../components/FilterField';
import { CheckboxList, CheckboxOption } from '../../components/CheckboxList';
import { useSearchDataRepositories } from './context/ContextProvider';
import { StrudelSlider } from '../../components/StrudelSlider';
import { setFilter } from './context/actions';
import { FilterConfig, FilterOperator } from '../../types/filters.types';
import { Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

interface FiltersPanelProps {
  onClose: () => any
}

export const FiltersPanel: React.FC<FiltersPanelProps> = (props) => { 
  const {state, dispatch} = useSearchDataRepositories();
  
  const assmeblyOptions: CheckboxOption[] = [];
  state.data?.forEach((d) => {
    if (d['Assembly'] && assmeblyOptions.filter((o) => o.value === d['Assembly']).length === 0) {
      assmeblyOptions.push({ label: d['Assembly'], value: d['Assembly'] });
    }
  });

  const categoryOptions: CheckboxOption[] = [];
  state.data?.forEach((d) => {
    if (d['category'] && categoryOptions.filter((o) => o.value === d['category']).length === 0) {
      categoryOptions.push({ label: d['category'], value: d['category'] });
    }
  });
  categoryOptions.sort((a, b) => a.label < b.label ? -1 : 1);

  const tagOptions: CheckboxOption[] = [];
  state.data?.forEach((d) => {
    if (d['tags']) {
      d['tags'].forEach((t: string) => {
        if (tagOptions.filter((o) => o.value === t).length === 0) {
          tagOptions.push({ label: t, value: t });
        }
      });
    }
  });
  tagOptions.sort((a, b) => a.label < b.label ? -1 : 1);

  const getFilterComponent = (filter: FilterConfig) => {
    switch (filter.filterType) {
      case 'CheckboxList': {
        return (
          <CheckboxList
            options={filter.props.options}
            onChange={(values) => dispatch(setFilter({ field: filter.field, value: values, operator: FilterOperator.CONTAINS_ONE_OF }))}
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
            onChangeCommitted={(event, values) => dispatch(setFilter({ field: filter.field, value: values, operator: FilterOperator.BETWEEN_INCLUSIVE }))}
          />
        );
      }
      case 'date range': {
        const currentDateRange = state.activeFilters.find((filter) => filter.field === filter.field);
        const hasValue = currentDateRange && Array.isArray(currentDateRange.value) && currentDateRange.value.length === 2;
        const currentMin = hasValue && Array.isArray(currentDateRange.value) ? currentDateRange.value[0] : null;
        const currentMax = hasValue && Array.isArray(currentDateRange.value) ? currentDateRange.value[1] : null;

        return (
          <Stack>
            <DatePicker 
              label="From"
              slotProps={{
                actionBar: {
                  actions: ['clear', 'today']
                }
              }}
              onChange={(value) => dispatch(setFilter({ field: filter.field, value: [value, currentMax], operator: FilterOperator.BETWEEN_DATES_INCLUSIVE }))}
            />
            <DatePicker 
              label="To"
              slotProps={{
                actionBar: {
                  actions: ['clear', 'today']
                }
              }}
              onChange={(value) => dispatch(setFilter({ field: filter.field, value: [currentMin, value], operator: FilterOperator.BETWEEN_DATES_INCLUSIVE }))}
            />
          </Stack>
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
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 2,
        paddingRight: 2
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