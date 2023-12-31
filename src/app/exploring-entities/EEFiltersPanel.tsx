import React, { useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, PaperProps, Slider, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FiltersPanel } from '../../components/FiltersPanel';
import { FilterField } from '../../components/FilterField';
import { CheckboxList, CheckboxOption } from '../../components/CheckboxList';
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
  const [eukRange, setEukRange] = useState([0, 100]);
  const [embRange, setEmbRange] = useState([0, 100]);
  // TODO: add markers to sliders
  const eukMarks = [
    {}
  ]
  
  const assmeblyOptions: CheckboxOption[] = [];
  state.data?.forEach((d) => {
    if (d['Assembly'] && assmeblyOptions.filter((o) => o.value === d['Assembly']).length === 0) {
      assmeblyOptions.push({ label: d['Assembly'], value: d['Assembly'] });
    }
  });

  const handleEukChange = (event: Event, newValue: number | number[]) => {
    setEukRange(newValue as number[]);
  };

  const handleEmbChange = (event: Event, newValue: number | number[]) => {
    setEmbRange(newValue as number[]);
  };

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
      <FilterField
        label="Assembly"
        isCollapsible
        filter={
          <CheckboxList
            options={assmeblyOptions}
            onChange={(values) => dispatch(setFilter({ field: 'Assembly', value: values, operator: 'contains one of' }))}
          />
        }
      />
      <FilterField
        label="Data Usage Policy"
        isCollapsible
        filter={
          <CheckboxList
            options={[
              { label: 'restricted', value: 'restricted' },
              { label: 'unrestricted', value: 'unrestricted' },
            ]}
            onChange={(values) => dispatch(setFilter({ field: 'Data Usage Policy', value: values, operator: 'contains one of' }))}
          />
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
    </FiltersPanel>
  )
}