const fetchAllCategories= (state={allcategories:[]}, action)=>{
    
    switch(action.type) {
        case "FETCH_All_CATEGORIES":
            return{            
                ...state,
                allcategories: action.payload
                
            };
        default:
            return state

    };

}
export default fetchAllCategories;