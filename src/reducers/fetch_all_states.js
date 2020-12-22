const fetchAllStates= (state={allstates:[]}, action)=>{
    
    switch(action.type) {
        case "FETCH_All_STATES":
            return{            
                ...state,
                allstates: action.payload
                
            };
        default:
            return state

    };

}
export default fetchAllStates;