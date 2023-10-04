import React, { useEffect, useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Radio, RadioGroup, Slider, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FiltersPanel as Filters } from '../../components/FiltersPanel';
import { FilterField } from '../../components/FilterField';
import { CheckboxList, CheckboxOption } from '../../components/CheckboxList';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { setFilter } from '../../components/contexts/analytics/actions';
import { FilterGroup } from '../../components/FilterGroup';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

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

export const FiltersPanel: React.FC<EEFiltersPanelProps> = (props) => { 
  const {state, dispatch} = useAnalytics();
  const [eukRange, setEukRange] = useState([0, 100]);
  const [embRange, setEmbRange] = useState([0, 100]);
  const [dateRange, setDateRange] = useState([null, dayjs()]);
  // TODO: add markers to sliders
  const eukMarks = [
    {}
  ]
  
  const categoryOptions: CheckboxOption[] = [];
  state.data?.forEach((d) => {
    if (d['category'] && categoryOptions.filter((o) => o.value === d['category']).length === 0) {
      categoryOptions.push({ label: d['category'], value: d['category'] });
    }
  });

  const handleEukChange = (event: Event, newValue: number | number[]) => {
    setEukRange(newValue as number[]);
  };

  const handleEmbChange = (event: Event, newValue: number | number[]) => {
    setEmbRange(newValue as number[]);
  };

  useEffect(() => {
    dispatch(setFilter({ field: 'publication_date', value: dateRange, operator: 'date range'}))
  }, [dateRange]);

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
        label="Euk. BUSCO %"
        isCollapsible
        filter={
          <Slider
            getAriaLabel={() => 'Euk. BUSCO % range'}
            value={eukRange}
            valueLabelDisplay="auto"
            onChange={handleEukChange}
            onChangeCommitted={(event, values) => dispatch(setFilter({ field: 'Euk. BUSCO %', value: values, operator: 'range' }))}
          />
        }
      />
      <FilterField
        label="Emb. BUSCO %"
        isCollapsible
        filter={
          <Slider
            getAriaLabel={() => 'Emb. BUSCO % range'}
            value={embRange}
            valueLabelDisplay="auto"
            onChange={handleEmbChange}
            onChangeCommitted={(event, values) => dispatch(setFilter({ field: 'Emb. BUSCO %', value: values, operator: 'range' }))}
          />
        }
      />
    </Filters>
  )
}