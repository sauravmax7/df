import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import  {fetchMostRead}  from '../actions/fetch_most_read';


import CardUI from './cardUI';

const NewsByCity = () => {
    
    //----- redux and dispatch the action
    const techSelector = useSelector((state) => state.FetchMostRead);
    const dispatch = useDispatch();
    const getTechNews = () => dispatch(fetchMostRead());
    

    useEffect(()=>{
       getTechNews();
    }, [])

    const filteredObjects = techSelector.mostRead.filter(item => item.c_id === 1);
    console.log("From component"+filteredObjects)

    

    return(
       
        <CardUI data={filteredObjects} type="Most Read"></CardUI>
    )   
}

export default NewsByCity;