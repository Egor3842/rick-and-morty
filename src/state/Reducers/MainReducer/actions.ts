import { CharactersDataType } from "./MainReducer";

export const SET_FETCHING = "SET_FETCHING";
export const SET_MAIN_DATA = "SET_MAIN_DATA";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_ERROR = "SET_ERROR";

export interface setFetchingType {
  type: typeof SET_FETCHING;
  isFetching: boolean;
}
export const setFetching = (isFetching: boolean): setFetchingType => {
  return { type: SET_FETCHING, isFetching };
};

export interface setDataType {
  type: typeof SET_MAIN_DATA;
  data: CharactersDataType;
}
export const setData = (data: CharactersDataType): setDataType => {
  return { type: SET_MAIN_DATA, data };
};

export interface setCurrentPageType {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
}
export const setCurrentPage = (currentPage: number): setCurrentPageType => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export interface setErrorType {
  type: typeof SET_ERROR;
  error: string;
}
export const setError = (error: string): setErrorType => {
  return { type: SET_ERROR, error };
};

export type ActionType =
  | setDataType
  | setFetchingType
  | setCurrentPageType
  | setErrorType;
