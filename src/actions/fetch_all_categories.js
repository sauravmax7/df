import DataService from "../services/service";
import {FETCH_All_CATEGORIES} from './actionType';

export function fetchAllCategories(){
    
        return function(dispatch){
            DataService.getAllCategories()
            .then(res => {
                let data = res.data;
                dispatch({type:FETCH_All_CATEGORIES, payload: data});
                 return data;
            })
       
            .catch(err => {
                console.log(err);
            })
      
         }
      
}
