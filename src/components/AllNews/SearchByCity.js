import React from "react";
import { useState } from "react";
import CardUI from "./Layout/cardUI";

export default function SearchByCity(props) {
  const [city, setCity] = useState();
  const [filteredNews, setfilteredNews] = useState();

  const getCity = (e) => {
    e.preventDefault();
    if (city === "" || city === "nothing") {
      console.log("There is no city selected");
    } else {
      setfilteredNews(
        props.news.filter((item) => item.city_id === parseInt(city))
      );
    }
  };

  let news;

  if (filteredNews !== undefined) {
    if (filteredNews.length > 0) {
      news = <CardUI data={filteredNews}></CardUI>;
    } else {
      news = <p>News Will Appear Soon!</p>;
    }
  }

  return (
    <React.Fragment>
      
      <div className="category-wrapper">
        <form onSubmit={getCity}>
          <label>City</label>
          <select onChange={(e) => setCity(e.target.value)}>
            <option value="nothing">Select an option...</option>
            {props.city.map((x) => {
              return (
                <option key={x.c_id} value={x.c_id}>
                  {x.c_name}
                </option>
              );
            })}
          </select>
          <input type="submit" value="Search" />
        </form>
        {news}
      </div>
    </React.Fragment>
  );
}
