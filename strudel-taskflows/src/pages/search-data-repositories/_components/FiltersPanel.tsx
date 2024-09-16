import React from 'react';
import { Filters } from '../../../components/Filters';

interface FiltersPanelProps {
  onClose: () => any
}

/**
 * Main filters panel in the search-data-repositories Task Flow.
 * Filters are generated based on the configurations in `definitions.filters.main`.
 * The input values will filter data in the `<DataListPanel>`.
 */
export const FiltersPanel: React.FC<FiltersPanelProps> = (props) => { 
  // const {state, dispatch} = useSearchDataRepositories();

  /**
   * Render filter component based on the `filterType` from the filter definition.
   */
  // const getFilterComponent = (filter: FilterConfig) => {
  //   switch (filter.filterType) {
  //     case 'CheckboxList': {
  //       return (
  //         <CheckboxList
  //           options={filter.props.options}
  //           onChange={(values) => dispatch(setFilter({ field: filter.field, value: values, operator: FilterOperator.CONTAINS_ONE_OF }))}
  //         />
  //       );
  //     }
  //     case 'Slider': {
  //       return (
  //         <StrudelSlider
  //           getAriaLabel={() => filter.field}
  //           valueLabelDisplay="auto"
  //           min={filter.props.min}
  //           max={filter.props.max}
  //           onChangeCommitted={(event, values) => dispatch(setFilter({ field: filter.field, value: values, operator: FilterOperator.BETWEEN_INCLUSIVE }))}
  //         />
  //       );
  //     }
  //     case 'date range': {
  //       const currentDateRange = state.activeFilters.find((filter) => filter.field === filter.field);
  //       const hasValue = currentDateRange && Array.isArray(currentDateRange.value) && currentDateRange.value.length === 2;
  //       const currentMin = hasValue && Array.isArray(currentDateRange.value) ? currentDateRange.value[0] : null;
  //       const currentMax = hasValue && Array.isArray(currentDateRange.value) ? currentDateRange.value[1] : null;

  //       return (
  //         <Stack>
  //           <DatePicker 
  //             label="From"
  //             slotProps={{
  //               actionBar: {
  //                 actions: ['clear', 'today']
  //               }
  //             }}
  //             onChange={(value) => dispatch(setFilter({ field: filter.field, value: [value, currentMax], operator: FilterOperator.BETWEEN_DATES_INCLUSIVE }))}
  //           />
  //           <DatePicker 
  //             label="To"
  //             slotProps={{
  //               actionBar: {
  //                 actions: ['clear', 'today']
  //               }
  //             }}
  //             onChange={(value) => dispatch(setFilter({ field: filter.field, value: [currentMin, value], operator: FilterOperator.BETWEEN_DATES_INCLUSIVE }))}
  //           />
  //         </Stack>
  //       );
  //     }
  //     default: {
  //       return null;
  //     }
  //   }
  // }

  /**
   * Content to render on the page for this component
   */
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
      {/* {state.filters.map((f, i) => (
        <FilterField
          key={`${f.field}-${i}`}
          label={f.displayName}
          isCollapsible
          filter={getFilterComponent(f)}
        />
      ))} */}
    </Filters>
  )
}