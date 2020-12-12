const fetchAllCities= (state={allcities:[]}, action)=>{
    
    switch(action.type) {
        case "FETCH_All_CITIES":
            return{            
                ...state,
                allcities: action.payload
                
            };
    
        // case "FILTER_NEWS_BY_CITY":
        //     return {
        //         ...state,
        //         newByCity: action.payload
        //     }
        default:
            return state

    };

}
export default fetchAllCities;