const fetchAllCities= (state={allcities:[]}, action)=>{
    
    switch(action.type) {
        case "FETCH_All_CITIES":
            return{            
                ...state,
                allcities: action.payload
                
            };
        default:
            return state

    };

}
export default fetchAllCities;