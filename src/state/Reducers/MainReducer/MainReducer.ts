import {
  ActionType,
  SET_CURRENT_PAGE,
  SET_ERROR,
  SET_FETCHING,
  SET_MAIN_DATA,
} from "./actions";

interface InfoDataType {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface ExtraInfoType {
  name: string;
  url: string;
}

export interface CharactersInfo {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: ExtraInfoType;
  name: string;
  origin: ExtraInfoType;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface CharactersDataType {
  info: InfoDataType;
  results: CharactersInfo[];
}

export interface initialStateType {
  isFetching: boolean;
  pagesAmount: number;
  currentPage: number;
  mainData: CharactersDataType | null;
  statuses: string[];
  genders: string[];
  error: string;
}
const initialState: initialStateType = {
  isFetching: false,
  pagesAmount: 1,
  currentPage: 1,
  mainData: null,
  statuses: [],
  genders: [],
  error: "",
};

const MainReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case SET_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_MAIN_DATA: {
      const pagesAmount = action.data.info.pages;
      let statuses: string[] = [];
      let genders: string[] = [];
      action.data.results.forEach((el) => {
        if (!statuses.includes(el.status)) {
          statuses.push(el.status);
        }
        if (!genders.includes(el.gender)) {
          genders.push(el.gender);
        }
      });
      return {
        ...state,
        mainData: action.data,
        pagesAmount,
        genders,
        statuses,
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_ERROR: {
      return { ...state, error: action.error };
    }
    default:
      return state;
  }
};

export default MainReducer;
