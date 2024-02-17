import { DataFilter, AnalyticsState } from './ContextProvider';

export enum AnalyticsActionType {
  SET_DATA = 'SET_DATA',
  SET_SEARCH = 'SET_SEARCH',
  SET_FILTERED_DATA = 'SET_FILTERED_DATA',
  SET_FILTER = 'SET_FILTER',
  SET_PREVIEW_ITEM = 'SET_PREVIEW_ITEM'
}

export interface AnalyticsAction {
  type: AnalyticsActionType;
  payload?: any;
}

export const setData = (data: AnalyticsState['data']): AnalyticsAction => ({
  type: AnalyticsActionType.SET_DATA,
  payload: data,
});

export const setSearch = (searchTerm: AnalyticsState['searchTerm']): AnalyticsAction => ({
  type: AnalyticsActionType.SET_SEARCH,
  payload: searchTerm,
});

export const setFilteredData = (data: AnalyticsState['filteredData']): AnalyticsAction => ({
  type: AnalyticsActionType.SET_FILTERED_DATA,
  payload: data,
});

export const setFilter = (filter: DataFilter): AnalyticsAction => ({
  type: AnalyticsActionType.SET_FILTER,
  payload: filter,
});

export const setPreviewItem = (rowItem: AnalyticsState['previewItem']): AnalyticsAction => ({
  type: AnalyticsActionType.SET_PREVIEW_ITEM,
  payload: rowItem,
});