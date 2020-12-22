import React from "react";
import { useState } from "react";
import CardUI from "./Layout/cardUI";

export default function SearchByCategories(props) {
  const [category, setCategory] = useState();
  const [filteredNews, setfilteredNews] = useState();

  const getCategory = (e) => {
    e.preventDefault();
    if (category === "" || category === "nothing") {
      console.log("There is no source selected");
    } else {
      setfilteredNews(
        props.news.filter((item) => item.category_id === parseInt(category))
      );
    }
  };

  let news;
  if (filteredNews !== undefined) {
    if (filteredNews.length > 0) {
      news = <CardUI data={filteredNews} tagName={category.category_name}></CardUI>;
    } else {
      news = <p>News Will Appear Soon!</p>;
    }
  }

  return (
    <React.Fragment>
      
      <div className="category-wrapper">
        <form onSubmit={getCategory}>
          <label>Category</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="nothing">Select an option...</option>
            {props.categories.map((x) => {
              return (
                <option key={x.category_id} value={x.category_id}>
                  {x.category_name}
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
