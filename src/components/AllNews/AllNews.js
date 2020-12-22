import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllNews } from "../../actions/fetch_all_news";
import { fetchAllCities } from "../../actions/fetch_all_cities";
import { fetchAllStates } from "../../actions/fetch_all_states";
import {fetchAllCategories} from '../../actions/fetch_all_categories'

import SearchByCity from "./SearchByCity";
import SearchByCategories from "./SearchByCategories";
import SearchByTitle from "./SearchByTitle";

import './Layout/styleSheet.css'
import { Header } from "../Header/Header";
export const AllNews = () => {
  //----- redux and dispatch the action
  const news = useSelector((state) => state.FetchAllNews);
  const cities = useSelector((state) => state.FetchAllCities);
  const categories = useSelector((state) => state.FetchAllCategories);
  const dispatch = useDispatch();
  const getTechNews = () => dispatch(fetchAllNews());
  const getAllCities = () => dispatch(fetchAllCities());
  const getAllStates = () => dispatch(fetchAllStates());
  const getAllCategories = () => dispatch(fetchAllCategories());
  useEffect(() => {
    getTechNews();
    getAllCities();
    getAllStates();
    getAllCategories();
  }, []);


  let mostRead = news.allNews.sort((a, b) =>a.readcount < b.readcount ? 1 : b.readcount < a.readcount ? -1 : 0);


  return (
    <React.Fragment>
      <Header></Header>
      <SearchByCity news={news.allNews} city={cities.allcities}/>
      <SearchByCategories news={news.allNews} categories={categories.allcategories}/>
      <SearchByTitle news={mostRead}/>
    </React.Fragment>
  );
};

export default AllNews;
