import { FiltersData } from "../../../routes/MainPage/MainPage";
import { API } from "./../../../api/index";
import { setFetching, setData, setError } from "./actions";

export const getInfoThunk =
  (page: number = 0, filter: FiltersData | null = null) =>
  async (dispatch: any) => {
    try {
      dispatch(setFetching(true));
      const response = await API.getAllCharacters(page, filter);
      dispatch(setData(response));
      dispatch(setFetching(false));
    } catch (e: any) {
      dispatch(setError("Not found"));
    }
  };
