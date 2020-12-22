import DataService from "../services/service";
import {FETCH_All_STATES} from './actionType';

export function fetchAllStates(){
    
        return function(dispatch){
            DataService.getAllStates()
            .then(res => {
                let data = res.data;
                dispatch({type:FETCH_All_STATES, payload: data});
               
                 return data;
                
                
            })
       
            .catch(err => {
                console.log(err);
            })
      
         }
      
}
