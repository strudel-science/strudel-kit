import { DataFilter } from '../../../types/filters.types';
import { ExploreDataState } from './ContextProvider';

export enum ExploreDataActionType {
  SET_DATA = 'SET_DATA',
  SET_SEARCH = 'SET_SEARCH',
  SET_FILTERED_DATA = 'SET_FILTERED_DATA',
  SET_FILTER = 'SET_FILTER',
  SET_PREVIEW_ITEM = 'SET_PREVIEW_ITEM'
}

export interface ExploreDataAction {
  type: ExploreDataActionType;
  payload?: any;
}

export const setData = (data: ExploreDataState['data']): ExploreDataAction => ({
  type: ExploreDataActionType.SET_DATA,
  payload: data,
});

export const setSearch = (searchTerm: ExploreDataState['searchTerm']): ExploreDataAction => ({
  type: ExploreDataActionType.SET_SEARCH,
  payload: searchTerm,
});

export const setFilteredData = (data: ExploreDataState['filteredData']): ExploreDataAction => ({
  type: ExploreDataActionType.SET_FILTERED_DATA,
  payload: data,
});

export const setFilter = (filter: DataFilter): ExploreDataAction => ({
  type: ExploreDataActionType.SET_FILTER,
  payload: filter,
});

export const setPreviewItem = (rowItem: ExploreDataState['previewItem']): ExploreDataAction => ({
  type: ExploreDataActionType.SET_PREVIEW_ITEM,
  payload: rowItem,
});