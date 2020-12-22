import DataService from "../services/service";
import { FETCH_All_NEWS } from "./actionType";

export function fetchAllNews() {
  return async (dispatch)=> {
    const data= await DataService.getAllNews()
    const res2 = await data.data
    dispatch({ type: FETCH_All_NEWS, payload: res2 })
  
  }
}

