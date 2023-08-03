import React, { useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FiltersPanel } from '../../components/FiltersPanel';
import { FilterField } from '../../components/FilterField';
import { CheckboxList } from '../../components/CheckboxList';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { setFilter } from '../../components/contexts/analytics/actions';
import { FilterGroup } from '../../components/FilterGroup';

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

interface EEFiltersPanelProps {
  onClose: () => any
}

const initFilterValues = (filters: Filter[]) => {
  const filterValues: any = {};
  filters.forEach((filter) => {
    filterValues[filter.field] = filter.defaultValue;
  })
};

export const EEFiltersPanel: React.FC<EEFiltersPanelProps> = (props) => { 
  const {state, dispatch} = useAnalytics();
  
  return (
    <FiltersPanel
      onClose={props.onClose}
      sx={{
        backgroundColor: 'white',
        pt: 3,
        pb: 3,
        pl: 2,
        pr: 2
      }}
    >
      <FilterGroup 
        label="Group 1"
        isCollapsible
      >
        <FilterField
          label="First Name"
          isCollapsible
          filter={
            <CheckboxList
              options={[
                { label: 'Arya', value: 'Arya' },
                { label: 'Cersei', value: 'Cersei' },
                { label: 'Jon', value: 'Jon' }
              ]}
              onChange={(values) => dispatch(setFilter({ field: 'firstName', value: values, operator: 'contains one of' }))}
            />
          }
        />
        <FilterField
          label="Last Name"
          isCollapsible
          filter={
            <CheckboxList
              options={[
                { label: 'Lannister', value: 'Lannister' },
                { label: 'Snow', value: 'Snow' },
                { label: 'Targaryen', value: 'Targaryen' }
              ]}
              onChange={(values) => dispatch(setFilter({ field: 'lastName', value: values, operator: 'contains one of' }))}
            />
          }
        />
      </FilterGroup>
      <FilterGroup 
        label="Group 1"
        isCollapsible
      >
        <FilterField
          label="First Name"
          isCollapsible
          filter={
            <CheckboxList
              options={[
                { label: 'Arya', value: 'Arya' },
                { label: 'Cersei', value: 'Cersei' },
                { label: 'Jon', value: 'Jon' }
              ]}
              onChange={(values) => dispatch(setFilter({ field: 'firstName', value: values, operator: 'contains one of' }))}
            />
          }
        />
        <FilterField
          label="Last Name"
          isCollapsible
          filter={
            <CheckboxList
              options={[
                { label: 'Lannister', value: 'Lannister' },
                { label: 'Snow', value: 'Snow' },
                { label: 'Targaryen', value: 'Targaryen' }
              ]}
              onChange={(values) => dispatch(setFilter({ field: 'lastName', value: values, operator: 'contains one of' }))}
            />
          }
        />
      </FilterGroup>
    </FiltersPanel>
  )
}