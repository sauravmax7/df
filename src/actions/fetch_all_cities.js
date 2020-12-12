import TutorialDataService from "../services/tutorial.service";

export function fetchAllCities(){
    
        return function(dispatch){
            TutorialDataService.getAllCities()
            .then(res => {
                let data = res.data;
                dispatch({type:"FETCH_All_CITIES", payload: data});
                console.log("From action"+data);
                 return data;
                
                
            })
       
            .catch(err => {
                console.log(err);
            })
      
         }
      
}
