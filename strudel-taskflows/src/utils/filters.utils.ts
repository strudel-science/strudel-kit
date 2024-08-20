import dayjs from "dayjs";
import { DataFilter, FilterConfig, FilterOperator } from "../types/filters.types";

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
            case 'contains': {
              if (d[f.field].indexOf(f.value) > -1) {
                match = true;
              }
              break;
            }
            case 'contains-one-of': {
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
            case 'equals-one-of': {
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
            case 'between-inclusive': {
              if (Array.isArray(f.value)) {
                const min = f.value[0];
                const max = f.value[1];
                if (d[f.field] >= min && d[f.field] <= max) {
                  match = true;
                }
              }
              break;
            }
            case 'between-dates-inclusive': {
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

// const { isPending, isFetching, isError, data, error } = useQuery({
//   queryKey: ['items', { pageSize, offset, ...filters }],
//   queryFn: async (): Promise<any> => {
//     const response = await fetch(`https://api.gbif.org/v1/occurrence/search?limit=${pageSize}&offset=${offset}`);
//     return await response.json();
//   },
//   placeholderData: keepPreviousData,
// });

/**
 * I could have something where the param data is all in an object
 * keyed by the name of the param then there would be a separate objected 
 * also keyed by param but instead of having the value it would be an operator name
 * and that would determine how the key-value is parsed into the URL.
 * 
 * Maybe call this buildApiUrl
 */
export const convertToUrlParams = (params: any, operators: any) => {
  const paramsString = '';
  Object.entries(params).forEach(([key, value], i) => {
    switch(operators[key]) {
      case 'between-inclusive':
        if (Array.isArray(value)) {
          const valueString = `${value[0]},${value[1]}`
          paramsString.concat(`${key}=${valueString}`);
        }
        break;
      default:
        paramsString.concat(`${key}=${value}`)
    }
    if (i < Object.entries(params).length - 1) {
      params.concat('&');
    }
  })
}

const toParamArrayString = (filter: DataFilter, filterConfig: FilterConfig) => {
  if (Array.isArray(filter.value)) {
    const separator = filterConfig.paramTypeOptions.separator || ',';
    return `${filter.field}=${filter.value.join(separator)}`
  } else {
    return '';
  }
}

const toParamRepeated = (filter: DataFilter) => {
  let paramsString = '';
  if (Array.isArray(filter.value)) {
    const valuesLength = filter.value?.length;
    filter.value.forEach((optionValue, k) => {
      paramsString = paramsString.concat(`${filter.field}=${optionValue}`);
      if (k < valuesLength - 1) {
        paramsString = paramsString.concat('&');
      }
    });
  }
  console.log(paramsString)
  return paramsString;
}

const toParamMinMax = (filter: DataFilter, filterConfig: FilterConfig) => {
  if (Array.isArray(filter.value) && filterConfig.paramTypeOptions) {
    const minParamString = `${filterConfig.paramTypeOptions.minParam}=${filter.value[0]}`;
    const maxParamString = `${filterConfig.paramTypeOptions.maxParam}=${filter.value[1]}`;
    return `${minParamString}&${maxParamString}`;
  } else {
    return '';
  }
}

export const buildParamsString = (filters: DataFilter[], filterConfigs: FilterConfig[]) => {
  let paramsString = '';
  filters.forEach((filter, i) => {
    const filterConfig = filterConfigs.find((c) => c.field === filter.field); 
    console.log(filterConfig);
    switch(filterConfig?.paramType) {
      case 'array-string':
        paramsString = paramsString.concat(toParamArrayString(filter, filterConfig));
        break;
      case 'repeated':
        paramsString = paramsString.concat(toParamRepeated(filter));
        break;
      case 'minmax':
        paramsString = paramsString.concat(toParamMinMax(filter, filterConfig));
        break;
      default:
        paramsString = paramsString.concat(`${filter.field}=${filter.value}`)
    }
    if (i < filters.length - 1) {
      paramsString = paramsString.concat('&');
    }
  });
  return paramsString;
}

