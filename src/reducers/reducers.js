import {combineReducers} from "redux";
import fetchTech from "../reducers/fetch_tech";
import customSearch from "../reducers/custom_search";
import fetchAllNews from "../reducers/fetch_all_news";
import fetchAllCities from "../reducers/fetch_all_cities"
import fetchAllStates from "../reducers/fetch_all_states";
import fetchAllCategories from "../reducers/fetch_all_categories";


//combine reducers
//export the reducers to use them
const reducers= combineReducers({
    FetchTech: fetchTech,
    CustomSearch: customSearch,
    FetchAllNews: fetchAllNews,
    FetchAllCities: fetchAllCities,
    FetchAllStates: fetchAllStates,
 FetchAllCategories: fetchAllCategories
});

export default reducers;