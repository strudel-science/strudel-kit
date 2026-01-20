import { DataFilter, FilterConfig } from '../types/filters.types';
import * as d3 from 'd3-fetch';

/**
 * Convert an array of values to a URL param by
 * joining the values with a separator.
 */
const toParamArrayString = (
  field: string,
  value: DataFilter['value'],
  separator = ','
) => {
  if (Array.isArray(value)) {
    return `${field}=${value.join(separator)}`;
  } else {
    return '';
  }
};

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
};

/**
 * Convert an array [min, max] to two URL params,
 * one for the min value and one for the max value.
 */
const toParamMinMax = (
  field: string,
  value: DataFilter['value'],
  minParam?: string,
  maxParam?: string
) => {
  if (Array.isArray(value) && minParam && maxParam) {
    const minParamString = `${minParam}=${value[0]}`;
    const maxParamString = `${maxParam}=${value[1]}`;
    return `${minParamString}&${maxParamString}`;
  } else {
    return '';
  }
};

/**
 * Using an array of active filters and a corresponding array of filter
 * config objects, build a valid query params string for the URL.
 */
export const buildParamsString = (
  filters: DataFilter[],
  filterConfigs: FilterConfig[]
) => {
  let paramsString = '';
  filters.forEach((filter, i) => {
    const filterConfig = filterConfigs.find((c) => c.field === filter.field);
    switch (filterConfig?.paramType) {
      case 'array-string':
        paramsString = paramsString.concat(
          toParamArrayString(
            filter.field,
            filter.value,
            filterConfig.paramTypeOptions.separator
          )
        );
        break;
      case 'repeated':
        paramsString = paramsString.concat(
          toParamRepeated(filter.field, filter.value)
        );
        break;
      case 'minmax':
        paramsString = paramsString.concat(
          toParamMinMax(
            filter.field,
            filter.value,
            filterConfig.paramTypeOptions.minParam,
            filterConfig.paramTypeOptions.maxParam
          )
        );
        break;
      default:
        paramsString = paramsString.concat(`${filter.field}=${filter.value}`);
    }
    if (i < filters.length - 1) {
      paramsString = paramsString.concat('&');
    }
  });
  return paramsString;
};

export const createFilterParams = (
  filters: DataFilter[],
  filterConfigs: FilterConfig[]
) => {
  const params = new URLSearchParams();
  filters.forEach((filter) => {
    const filterConfig = filterConfigs.find((c) => c.field === filter.field);
    const options = filterConfig?.paramTypeOptions;
    switch (filterConfig?.paramType) {
      case 'array-string':
        if (Array.isArray(filter.value)) {
          const separator = options?.separator || ',';
          params.append(filter.field, filter.value.join(separator));
        }
        break;
      case 'minmax':
        if (
          Array.isArray(filter.value) &&
          options.minParam &&
          options.maxParam
        ) {
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
          params.append(filter.field, filter.value.toString());
        }
    }
  });
  return params;
};

export const cleanUrl = (url: string) => {
  return url.replace(/([^:]\/)\/+/g, '$1');
};

export const cleanPath = (url: string) => {
  return url.replace(/\/\//g, '/');
};

/**
 * Fetch data from a local CSV, TSV, or JSON, or an external API
 * that returns JSON.
 */
export const fetchData = async (dataSource: string) => {
  // Get the base portion of the URL. Will be blank when running locally.
  const base = document.querySelector('base')?.getAttribute('href') ?? '';
  // Use the VITE_BASE_URL env variable to specify a path prefix that
  // should be added to routes and local requests
  const basePath = import.meta.env.VITE_BASE_URL || '';
  const leadingSlash = basePath ? '/' : '';
  const basename = cleanPath(leadingSlash + base + basePath);
  const fileExtension = dataSource.split('.').pop();
  const isExternal = dataSource.startsWith('http');
  const dataSourcePath = isExternal
    ? cleanUrl(dataSource)
    : cleanUrl(`${basename}/${dataSource}`);
  let data: any = [];
  if (fileExtension === 'csv') {
    data = await d3.csv(dataSourcePath);
  } else if (fileExtension === 'tsv') {
    data = await d3.tsv(dataSourcePath);
  } else if (fileExtension === 'json' || isExternal) {
    const response = await fetch(dataSourcePath);
    data = await response.json();
  }
  return data;
};
