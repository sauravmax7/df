import DataService from "../services/service";
import { FETCH_All_CITIES } from "./actionType";

export function fetchAllCities() {
  return function (dispatch) {
    DataService.getAllCities()
      .then((res) => {
        let data = res.data;
        dispatch({ type: FETCH_All_CITIES, payload: data });
        
        return data;
      })

      .catch((err) => {
        console.log(err);
      });
  };
}
