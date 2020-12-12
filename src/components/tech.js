import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchTech } from "../actions/fetch_tech";
import CardUI from './cardUI';

const Tech = () => {
    
    //----- redux and dispatch the action
    const techSelector = useSelector((state) => state.FetchTech);
    const dispatch = useDispatch();
    const getTechNews = () => dispatch(fetchTech());
    

    useEffect(()=>{
       getTechNews();
    }, [])

    

    return(
       
        <CardUI data={techSelector.techNews} type="All News"></CardUI>
    )   
}

export default Tech;