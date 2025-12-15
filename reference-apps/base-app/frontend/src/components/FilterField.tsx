import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  StackProps,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { CheckboxList } from './CheckboxList';
import { RangeSlider } from './RangeSlider';
import { DatePicker } from '@mui/x-date-pickers';
import { useFilters } from './FilterContext';
import {
  FilterComponent,
  FilterOperator,
  FilterValue,
} from '../types/filters.types';

interface FilterFieldProps extends StackProps {
  label: string;
  field: string;
  tooltip?: string;
  operator: FilterOperator;
  filterComponent: FilterComponent;
  filterProps?: any;
}

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
};

/**
 *
 */
export const FilterField: React.FC<FilterFieldProps> = ({
  label,
  field,
  tooltip,
  operator,
  filterComponent,
  filterProps,
  ...rest
}) => {
  const { activeFilters, dispatch } = useFilters();
  const [value, setValue] = useState<FilterValue<typeof filterComponent>>(null);
  const currentFilter = activeFilters.find((filter) => filter.field === field);
  const isActive = hasValue(currentFilter?.value);

  /**
   * When a filter is canceled, reset its value to the proper
   * empty or base state depending on the filter type.
   * In the activeFilters variable, empty filters will always be marked as null.
   */
  const handleCancelFilter = () => {
    switch (filterComponent) {
      case 'CheckboxList':
        setValue(null);
        break;
      case 'RangeSlider':
        setValue([filterProps.min, filterProps.max]);
        break;
      case 'DateRange':
        setValue([filterProps.min, filterProps.max]);
        break;
      case 'TextField':
        setValue(null);
        break;
      default:
        throw new Error('Unknown filter type');
    }

    dispatch({
      type: 'SET_FILTER',
      payload: { field: field, value: null, operator },
    });
  };

  /**
   * Render filter component based on the `filterComponent` prop.
   */
  const getFilterComponent = () => {
    switch (filterComponent) {
      case 'CheckboxList': {
        return (
          <CheckboxList
            values={value as string[] | number[] | null}
            options={filterProps.options}
            onChange={(values) =>
              dispatch({
                type: 'SET_FILTER',
                payload: { field: field, value: values, operator },
              })
            }
            {...filterProps}
          />
        );
      }
      case 'RangeSlider': {
        const handleSliderChange = (
          event: Event | React.SyntheticEvent<Element, Event>,
          values: number | number[]
        ) => {
          if (!Array.isArray(values)) {
            return;
          }
          let newValues: number[] | null = [...values];
          /** Set to null if both ends of slider are at min/max */
          if (values[0] === filterProps.min && values[1] === filterProps.max) {
            newValues = null;
          }
          dispatch({
            type: 'SET_FILTER',
            payload: { field: field, value: newValues, operator },
          });
        };

        return (
          <RangeSlider
            getAriaLabel={() => field}
            valueLabelDisplay="auto"
            min={filterProps.min}
            max={filterProps.max}
            value={value || [filterProps.min, filterProps.max]}
            onChange={(e, v) => setValue(v as number[])}
            onChangeCommitted={handleSliderChange}
            {...filterProps}
          />
        );
      }
      case 'DateRange': {
        const currentDateRange = activeFilters.find(
          (filter) => filter.field === filter.field
        )?.value;
        const hasDateValue =
          currentDateRange &&
          Array.isArray(currentDateRange) &&
          currentDateRange.length === 2;
        const currentMin =
          hasDateValue && Array.isArray(currentDateRange)
            ? currentDateRange[0]
            : null;
        const currentMax =
          hasDateValue && Array.isArray(currentDateRange)
            ? currentDateRange[1]
            : null;

        return (
          <Stack>
            <DatePicker
              label="From"
              slotProps={{
                actionBar: {
                  actions: ['clear', 'today'],
                },
              }}
              onChange={(v) =>
                dispatch({
                  type: 'SET_FILTER',
                  payload: {
                    field: field,
                    value: [v, currentMax],
                    operator,
                  },
                })
              }
            />
            <DatePicker
              label="To"
              slotProps={{
                actionBar: {
                  actions: ['clear', 'today'],
                },
              }}
              onChange={(v) =>
                dispatch({
                  type: 'SET_FILTER',
                  payload: {
                    field: field,
                    value: [currentMin, v],
                    operator,
                  },
                })
              }
            />
          </Stack>
        );
      }
      case 'TextField': {
        /**
         * Debounce the dispatch so that activeFilters isn't rapidly updated.
         */
        useEffect(() => {
          const timeout = setTimeout(() => {
            dispatch({
              type: 'SET_FILTER',
              payload: { field: field, value: value, operator },
            });
          }, 1000);
          return () => {
            clearTimeout(timeout);
          };
        }, [value]);

        return (
          <TextField
            value={value || ''}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            {...filterProps}
          />
        );
      }
    }
  };

  /**
   * When activeFilters changes, make sure the value changes accordingly.
   * This primarily happens when filters are reset from the top.
   */
  useEffect(() => {
    if (isActive) {
      setValue(currentFilter?.value || null);
    } else if (filterComponent === 'RangeSlider') {
      /** RangeSliders should be considered off if both values are min and max */
      if (
        value &&
        (value[0] !== filterProps.min || value[1] !== filterProps.max)
      ) {
        handleCancelFilter();
      }
    } else if (hasValue(value)) {
      handleCancelFilter();
    }
  }, [JSON.stringify(activeFilters)]);

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
        },
      }}
      {...rest}
    >
      <Box display="inline-block">
        <Stack
          direction="row"
          spacing={1}
          onClick={() => handleCancelFilter()}
          sx={{
            cursor: isActive ? 'pointer' : 'default',
            display: 'inline-flex',
          }}
        >
          {tooltip && (
            <Tooltip title={tooltip} placement="top" arrow>
              <Typography
                fontWeight="bold"
                color={isActive ? 'primary' : 'auto'}
                sx={{
                  textDecoration: 'underline',
                  textDecorationStyle: 'dotted',
                  textUnderlineOffset: '0.25rem',
                }}
              >
                {label}
              </Typography>
            </Tooltip>
          )}
          {!tooltip && (
            <Typography
              fontWeight="bold"
              color={isActive ? 'primary' : 'default'}
            >
              {label}
            </Typography>
          )}
          {isActive && <CancelOutlinedIcon color="primary" />}
        </Stack>
      </Box>
      <Box>{getFilterComponent()}</Box>
    </Stack>
  );
};
