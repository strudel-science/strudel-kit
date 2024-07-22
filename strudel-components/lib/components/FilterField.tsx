import React, { useState } from 'react';
import { Box, Stack, StackProps, Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { CheckboxList } from './CheckboxList';
import { RangeSlider } from './RangeSlider';
import { DatePicker } from '@mui/x-date-pickers';
import { useFilters } from './FilterContext';

interface FilterFieldProps extends StackProps {
  label: string;
  field: string;
  filterComponent: 'RangeSlider' | 'CheckboxList' | 'DateRange';
  filterProps: any;
}

/**
 * The type of the value should be dependent on the filterComponent
 */
type FilterValue<T> = 
  T extends 'RangeSlider' ? number[] : 
  T extends 'CheckboxList' ? string[] | number[] | null : 
  T extends 'DateRange' ? [Date | null, Date | null] : 
  never;

/**
 * Determine if a value is truthy or falsy in the context of a filter.
 * Values like 0 and false should be considered as having a value,
 * and having an empty array should be considered not having a value.
 */
export const hasValue = (value: any) => {
  if (value === 0 || value === false) {
    return true;
  } else if (Array.isArray(value) && value.length === 0) {
    return false;
  } else {
    return !!value;
  }
}

/**
 * 
 */
export const FilterField: React.FC<FilterFieldProps> = ({
  label,
  field,
  filterComponent,
  filterProps,
  ...rest
}) => {
  const { state, dispatch } = useFilters();
  const [value, setValue] = useState<FilterValue<typeof filterComponent>>(null);
  const isActive = hasValue(state.activeFilters[field]);

  /**
   * When a filter is canceled, reset its value to the proper 
   * empty or base state depending on the filter type.
   * In the activeFilters variable, empty filters will always be marked as null.
   */
  const handleCancelFilter = () => {
    switch (filterComponent) {
      case 'CheckboxList':
        setValue([]);
        break;
      case 'RangeSlider':
        setValue([filterProps.min, filterProps.max]);
        break;
      case 'DateRange':
        setValue([filterProps.min, filterProps.max]);
        break;
      default:
        console.log('Unknown filter type');
    }
      
    dispatch({ type: 'SET_FILTER', payload: { field: field, value: null } });
  }

  /**
   * Render filter component based on the `filterComponent` prop.
   */
  const getFilterComponent = (
    field: FilterFieldProps['field'],
    filterComponent: FilterFieldProps['filterComponent'],
    filterProps: FilterFieldProps['filterProps'],
  ) => {
    switch (filterComponent) {
      case 'CheckboxList': {
        return (
          <CheckboxList
            values={value as string[] | number[] | null}
            options={filterProps.options}
            onChange={(values) => dispatch({ type: 'SET_FILTER', payload: { field: field, value: values } })}
          />
        );
      }
      case 'RangeSlider': {
        const handleSliderChange = (event: Event | React.SyntheticEvent<Element, Event>, values: number | number[]) => {
          if (!Array.isArray(values)) {
            return;
          }
          let newValues: number[] | null = [...values];
          /** Set to null if both ends of slider are at min/max */
          if (values[0] === filterProps.min && values[1] === filterProps.max) {
              newValues = null
          }
          dispatch({ type: 'SET_FILTER', payload: { field: field, value: newValues } })
        };

        return (
          <RangeSlider
            getAriaLabel={() => field}
            valueLabelDisplay="auto"
            min={filterProps.min}
            max={filterProps.max}
            value={value || [filterProps.min, filterProps.max]}
            onChange={(e, value) => setValue(value as number[])}
            onChangeCommitted={handleSliderChange}
          />
        );
      }
      case 'DateRange': {
        const currentDateRange = state.activeFilters[field];
        const hasValue = currentDateRange && Array.isArray(currentDateRange) && currentDateRange.length === 2;
        const currentMin = hasValue && Array.isArray(currentDateRange) ? currentDateRange[0] : null;
        const currentMax = hasValue && Array.isArray(currentDateRange) ? currentDateRange[1] : null;

        return (
          <Stack>
            <DatePicker 
              label="From"
              slotProps={{
                actionBar: {
                  actions: ['clear', 'today']
                }
              }}
              onChange={(value) => dispatch({ type: 'SET_FILTER', payload: { field: field, value: [value, currentMax] } })}
            />
            <DatePicker 
              label="To"
              slotProps={{
                actionBar: {
                  actions: ['clear', 'today']
                }
              }}
              onChange={(value) => dispatch({ type: 'SET_FILTER', payload: { field: field, value: [currentMin, value] } })}
            />
          </Stack>
        );
      }
    }
  }
  return (
    <Stack 
      spacing={1}
      sx={{
        paddingBottom: 2,
        borderBottom: '1px solid',
        borderBottomColor: 'grey.300',
        '&:last-child': {
          borderBottom: 'none',
          paddingBottom: 0,
        }
      }}
      {...rest}
    >
      <Box display="inline-block">
        <Stack 
          direction="row"
          spacing={1}
          onClick={() => handleCancelFilter()}
          sx={{
            cursor: 'pointer',
            display: 'inline-flex',
          }}
        >
          <Typography
            fontWeight="bold"
            color={isActive ? 'primary' : 'default'}
          >
            {label}
          </Typography>
          {isActive && (
            <CancelOutlinedIcon color="primary" />
          )}
        </Stack>
      </Box>
      <Box>
        {getFilterComponent(field, filterComponent, filterProps)}
      </Box>
    </Stack>
  )
}