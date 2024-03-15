import { DataFilter } from '../../../types/filters.types';
import { SearchDataRepositoriesState } from './ContextProvider';

export enum SearchDataRepositoriesActionType {
  SET_DATA = 'SET_DATA',
  SET_SEARCH = 'SET_SEARCH',
  SET_FILTERED_DATA = 'SET_FILTERED_DATA',
  SET_FILTER = 'SET_FILTER',
  SET_PREVIEW_ITEM = 'SET_PREVIEW_ITEM'
}

export interface SearchDataRepositoriesAction {
  type: SearchDataRepositoriesActionType;
  payload?: any;
}

export const setData = (data: SearchDataRepositoriesState['data']): SearchDataRepositoriesAction => ({
  type: SearchDataRepositoriesActionType.SET_DATA,
  payload: data,
});

export const setSearch = (searchTerm: SearchDataRepositoriesState['searchTerm']): SearchDataRepositoriesAction => ({
  type: SearchDataRepositoriesActionType.SET_SEARCH,
  payload: searchTerm,
});

export const setFilteredData = (data: SearchDataRepositoriesState['filteredData']): SearchDataRepositoriesAction => ({
  type: SearchDataRepositoriesActionType.SET_FILTERED_DATA,
  payload: data,
});

export const setFilter = (filter: DataFilter): SearchDataRepositoriesAction => ({
  type: SearchDataRepositoriesActionType.SET_FILTER,
  payload: filter,
});

export const setPreviewItem = (rowItem: SearchDataRepositoriesState['previewItem']): SearchDataRepositoriesAction => ({
  type: SearchDataRepositoriesActionType.SET_PREVIEW_ITEM,
  payload: rowItem,
});