import dayjs from "dayjs";
import { DataFilter, FilterOperator } from "../types/filters.types";

export const filterBySearchText = (allData: any[], searchText?: string) => {
  let filteredData = allData;
  if (searchText) {
    filteredData = allData.filter((d) => {
      const rowString = JSON.stringify(d).toLowerCase();
      return rowString.indexOf(searchText.toLowerCase()) > -1;
    });
  }
  return filteredData;
};

export const filterByDataFilters = (allData: any[], filters: DataFilter[]) => {
  let filteredData = allData;
  if (filters.length > 0) {
    filteredData = allData.filter((d) => {
      let include = true;
      /**
       * All filters have to be matched for a row to be included in the filtered data
       */
      filters.forEach((f) => {
        let match = false;
        if (include === true) {
          switch (f.operator) {
            case FilterOperator.CONTAINS: {
              if (d[f.field].indexOf(f.value) > -1) {
                match = true;
              }
              break;
            }
            case FilterOperator.CONTAINS_ONE_OF: {
              if (Array.isArray(f.value)) {
                f.value.forEach((v) => {
                  if (!match) {
                    if (Array.isArray(d[f.field])) {
                      if (d[f.field].indexOf(v) > -1) {
                        match = true;
                      }
                    } else {
                      if (d[f.field] === v) {
                        match = true;
                      }
                    }
                    
                  }
                });
              }
              break;
            }
            case FilterOperator.EQUALS_ONE_OF: {
              console.log(f.value);
              console.log(d[f.field]);
              if (Array.isArray(f.value)) {
                f.value.forEach((v) => {
                  if (!match) {
                    if (d[f.field] === v) {
                      match = true;
                    }
                  }
                });
              }
              break;
            }
            case FilterOperator.BETWEEN_INCLUSIVE: {
              if (Array.isArray(f.value)) {
                const min = f.value[0];
                const max = f.value[1];
                if (d[f.field] >= min && d[f.field] <= max) {
                  match = true;
                }
              }
              break;
            }
            case FilterOperator.BETWEEN_DATES_INCLUSIVE: {
              if (
                typeof d[f.field] === 'string' 
                && Array.isArray(f.value)
                && f.value[0]
                && f.value[1]
              ) {
                const dateValue = dayjs(d[f.field]);
                if (dateValue.isAfter(f.value[0]) && dateValue.isBefore(f.value[1])) {
                  console.log('match');
                  match = true;
                }
              } else {
                match = true;
              }
              break;
            }
            default:
              break;
          }
        }
        if (!match) include = false;
      });
      return include;
    });
  }
  return filteredData;
};

export const filterData = (allData: any[], filters: DataFilter[], searchText?: string) => {
  const filteredByText = filterBySearchText(allData, searchText);
  const filteredByTextAndDataFilters = filterByDataFilters(filteredByText, filters);
  return filteredByTextAndDataFilters;
}

export const initSliderTicks = (ticks: number | null, domain: number[], scale?: any) => {
  if (ticks === 2) {
    return domain;
  } else if (ticks !== null) {
    return scale.ticks(ticks);
  } else {
    return;
  }
};