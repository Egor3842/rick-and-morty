import { AxiosResponse } from "axios";
import { FiltersData } from "../routes/MainPage/MainPage";
import { instance } from "./instance";

export const API = {
    getAllCharacters(page: number, filter: FiltersData | null ) {
      const searchParams = new URLSearchParams();
      searchParams.append('page', `${page}`);
      if (filter){
        if (filter.name) {
          searchParams.append('name', `${filter.name}`);
        }
        if (filter.gender) {
          searchParams.append('gender', `${filter.gender}`);
        }
        if (filter.status) {
          searchParams.append('status', `${filter.status}`);
        }
      }
      return instance.get(`?${searchParams.toString()}`).then((response: AxiosResponse<any>) => {
        return response.data;
      });
    },
}