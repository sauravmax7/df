const fetchAllStates= (state={allstates:[]}, action)=>{
    
    switch(action.type) {
        case "FETCH_All_STATES":
            return{            
                ...state,
                allstates: action.payload
                
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
export default fetchAllStates;