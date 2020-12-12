import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import  {fetchAllNews}  from '../actions/fetch_all_news';
import {fetchAllCities} from '../actions/fetch_all_cities'
import { fetchAllStates } from '../actions/fetch_all_states';

import SearchByCity from './pages/SearchByCity';
import CardUI from './cardUI';



const AllNews = () => {
    
    //----- redux and dispatch the action
    const techSelector = useSelector((state) => state.FetchAllNews);
    const cities = useSelector((state) => state.FetchAllCities);
    const states = useSelector((state) => state.FetchAllStates);
    const dispatch = useDispatch();
    const getTechNews = () => dispatch(fetchAllNews());
    const getAllCities = () => dispatch(fetchAllCities());
    const getAllStates = () => dispatch(fetchAllStates());

    useEffect(()=>{
       getTechNews();
       getAllCities();
       getAllStates();
    }, [])

    // console.log("from comp cities"+ cities.allcities);
    // console.log("Form component news"+JSON.stringify(techSelector.allNews));
    

    return(
        <React.Fragment>
        <SearchByCity news={techSelector.allNews} city={cities.allcities}></SearchByCity>
       
        <CardUI data={techSelector.allNews} type="All News"></CardUI>
        </React.Fragment>
    )   
}

export default AllNews;