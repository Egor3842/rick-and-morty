import { AppStateType } from "../../redux";

export const getMainData = (state: AppStateType) => state.MainReducer.mainData;

export const getFetching = (state: AppStateType) =>
  state.MainReducer.isFetching;

export const getPagesAmount = (state: AppStateType) =>
  state.MainReducer.pagesAmount;

export const getCurrentPage = (state: AppStateType) =>
  state.MainReducer.currentPage;

export const getStatuses = (state: AppStateType) => state.MainReducer.statuses;

export const getGenders = (state: AppStateType) => state.MainReducer.genders;

export const getError = (state: AppStateType) => state.MainReducer.error;
