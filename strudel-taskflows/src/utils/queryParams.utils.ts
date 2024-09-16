import { DataFilter, FilterConfig } from "../types/filters.types";

/**
 * Convert an array of values to a URL param by
 * joining the values with a separator.
 */
const toParamArrayString = (field: string, value: DataFilter['value'], separator = ',') => {
  if (Array.isArray(value)) {
    return `${field}=${value.join(separator)}`;
  } else {
    return '';
  }
}

/**
 * Convert an array of values to URL params by
 * repeating the param for each value in the array.
 */
const toParamRepeated = (field: string, value: DataFilter['value']) => {
  let paramsString = '';
  if (Array.isArray(value)) {
    const valuesLength = value?.length;
    value.forEach((optionValue, k) => {
      paramsString = paramsString.concat(`${field}=${optionValue}`);
      if (k < valuesLength - 1) {
        paramsString = paramsString.concat('&');
      }
    });
  }
  return paramsString;
}

/**
 * Convert an array [min, max] to two URL params,
 * one for the min value and one for the max value.
 */
const toParamMinMax = (field: string, value: DataFilter['value'], minParam?: string, maxParam?: string) => {
  if (Array.isArray(value) && minParam && maxParam) {
    const minParamString = `${minParam}=${value[0]}`;
    const maxParamString = `${maxParam}=${value[1]}`;
    return `${minParamString}&${maxParamString}`;
  } else {
    return '';
  }
}

/**
 * Using an array of active filters and a corresponding array of filter
 * config objects, build a valid query params string for the URL.
 */
export const buildParamsString = (filters: DataFilter[], filterConfigs: FilterConfig[]) => {
  let paramsString = '';
  filters.forEach((filter, i) => {
    const filterConfig = filterConfigs.find((c) => c.field === filter.field); 
    console.log(filterConfig);
    switch(filterConfig?.paramType) {
      case 'array-string':
        paramsString = paramsString.concat(toParamArrayString(filter.field, filter.value, filterConfig.paramTypeOptions.separator));
        break;
      case 'repeated':
        paramsString = paramsString.concat(toParamRepeated(filter.field, filter.value));
        break;
      case 'minmax':
        paramsString = paramsString.concat(toParamMinMax(filter.field, filter.value, filterConfig.paramTypeOptions.minParam, filterConfig.paramTypeOptions.maxParam));
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

export const createFilterParams = (filters: DataFilter[], filterConfigs: FilterConfig[]) => {
  const params = new URLSearchParams();
  filters.forEach((filter, i) => {
    const filterConfig = filterConfigs.find((c) => c.field === filter.field); 
    const options = filterConfig?.paramTypeOptions;
    switch(filterConfig?.paramType) {
      case 'array-string':
        if (Array.isArray(filter.value)) {
          const separator = options?.separator || ',';
          params.append(filter.field, filter.value.join(separator));
        }
        break;
      case 'minmax':
        if (Array.isArray(filter.value) && options.minParam && options.maxParam) {
          params.append(options.minParam, filter.value[0].toString());
          params.append(options.maxParam, filter.value[1].toString());
        }
        break;
      case 'repeated':
        if (Array.isArray(filter.value)) {
          filter.value.forEach((value) => {
            params.append(filter.field, value.toString());
          });
        }
        break;
      default:
        if (filter.value) {
          params.append(filter.field, filter.value.toString())
        }
    }
  });
  return params;
}