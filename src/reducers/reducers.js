import {combineReducers} from "redux";
import fetchTech from "../reducers/fetch_tech";
import customSearch from "../reducers/custom_search";
import fetchAllNews from "../reducers/fetch_all_news";
import fetchAllCities from "../reducers/fetch_all_cities"
import  fetchAllStates  from "../reducers/fetch_all_states";


//combine reducers
//remember you need to export the reducers to use them
const reducers= combineReducers({
    FetchTech: fetchTech,
    CustomSearch: customSearch,
    FetchAllNews: fetchAllNews,
    FetchAllCities: fetchAllCities,
    FetchAllStates: fetchAllStates
});

export default reducers;