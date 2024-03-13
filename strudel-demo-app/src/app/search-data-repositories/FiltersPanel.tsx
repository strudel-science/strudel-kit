import { Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { CheckboxList, CheckboxOption } from '../../components/CheckboxList';
import { FilterField } from '../../components/FilterField';
import { Filters } from '../../components/Filters';
import { useSearchDataRepositories } from './context/ContextProvider';
import { setFilter } from './context/actions';

enum FilterType {
  CHECKBOX_LIST = 'CHECKBOX_LIST',
  RANGE_SLIDER = 'RANGE_SLIDER',
}

interface Filter {
  label: string;
  field: string;
  type: FilterType;
  defaultValue: any;
}

interface FiltersPanelProps {
  onClose: () => any
}

const initFilterValues = (filters: Filter[]) => {
  const filterValues: any = {};
  filters.forEach((filter) => {
    filterValues[filter.field] = filter.defaultValue;
  })
};

export const FiltersPanel: React.FC<FiltersPanelProps> = (props) => { 
  const {state, dispatch} = useSearchDataRepositories();
  const [dateRange, setDateRange] = useState([null, dayjs()]);
  
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

  useEffect(() => {
    dispatch(setFilter({ field: 'publication_date', value: dateRange, operator: 'date range'}))
  }, [dateRange]);

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
      <FilterField
        label="Category"
        isCollapsible
        filter={
          <CheckboxList
            options={categoryOptions}
            onChange={(values) => dispatch(setFilter({ field: 'category', value: values, operator: 'contains one of' }))}
          />
        }
      />
      <FilterField
        label="Date Range"
        isCollapsible
        filter={
          <Stack>
            <DatePicker 
              value={dateRange[0]} 
              label="From"
              slotProps={{
                actionBar: {
                  actions: ['clear', 'today']
                }
              }}
              onChange={(value) => setDateRange([value, dateRange[1]])}
            />
            <DatePicker 
              value={dateRange[1]} 
              label="To"
              slotProps={{
                actionBar: {
                  actions: ['clear', 'today']
                }
              }}
              onChange={(value) => setDateRange([dateRange[0], value])}
            />
          </Stack>
        }
      />
      <FilterField
        label="Tags"
        isCollapsible
        filter={
          <CheckboxList
            options={tagOptions}
            onChange={(values) => dispatch(setFilter({ field: 'tags', value: values, operator: 'contains one of' }))}
          />
        }
      />
    </Filters>
  )
}