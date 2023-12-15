import { DataFilter, ContributingDataState } from './ContextProvider';

export enum ContributingDataActionType {
  SET_DATA = 'SET_DATA',
  SET_SEARCH = 'SET_SEARCH',
  SET_FILTERED_DATA = 'SET_FILTERED_DATA',
  SET_FILTER = 'SET_FILTER',
  SET_PREVIEW_ITEM = 'SET_PREVIEW_ITEM'
}

export interface ContributingDataAction {
  type: ContributingDataActionType;
  payload?: any;
}

export const setData = (data: ContributingDataState['data']): ContributingDataAction => ({
  type: ContributingDataActionType.SET_DATA,
  payload: data,
});

export const setSearch = (searchTerm: ContributingDataState['searchTerm']): ContributingDataAction => ({
  type: ContributingDataActionType.SET_SEARCH,
  payload: searchTerm,
});

export const setFilteredData = (data: ContributingDataState['filteredData']): ContributingDataAction => ({
  type: ContributingDataActionType.SET_FILTERED_DATA,
  payload: data,
});

export const setFilter = (filter: DataFilter): ContributingDataAction => ({
  type: ContributingDataActionType.SET_FILTER,
  payload: filter,
});

export const setPreviewItem = (rowItem: ContributingDataState['previewItem']): ContributingDataAction => ({
  type: ContributingDataActionType.SET_PREVIEW_ITEM,
  payload: rowItem,
});