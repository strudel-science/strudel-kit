import React, { useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Slider, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Filters } from '../../components/Filters';
import { FilterField } from '../../components/FilterField';
import { CheckboxList, CheckboxOption } from '../../components/CheckboxList';
import { setFilter } from '../../components/contexts/analytics/actions';
import { FilterGroup } from '../../components/FilterGroup';
import { FilterConfig, useExploreData } from './context/ContextProvider';
import { StrudelSlider } from '../../components/StrudelSlider';

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
        backgroundColor: 'white',
        pt: 3,
        pb: 3,
        pl: 2,
        pr: 2
      }}
    >
      {state.filters.map((f, i) => (
        <FilterField
          label={f.displayName}
          isCollapsible
          filter={getFilterComponent(f)}
        />
      ))}
    </Filters>
  )
}