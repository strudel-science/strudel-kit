import { AppState } from './ContextProvider';

export enum AppActionType {

}

export interface AppAction {
  type: AppActionType;
  payload?: any;
}