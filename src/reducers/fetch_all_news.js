const fetchAllNews= (state={allNews:[]}, action)=>{
    
        switch(action.type) {
            case "FETCH_All_NEWS":
                return{            
                    ...state,
                    allNews: action.payload
                    
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
export default fetchAllNews;