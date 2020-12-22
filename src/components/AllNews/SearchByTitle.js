// import React from 'react'
import CardUI from "./Layout/cardUI";

import React, { Component } from "react";

export class SearchByTitle extends Component {
  state = {
    searchTitle: "",
  };
  editSearchTitle = (e) => {
    this.setState({ searchTitle: e.target.value });
  };
  render() {
    return (
      <div>
        <br />

        
        <div className="searchBox">
        <h6>Search News</h6>
          <input
          id="searchByKeyWord"
            type="text"
            value={this.state.searchTitle}
            onChange={this.editSearchTitle}
          />
        </div><br/>
        <h2 className="newsTitle">TRENDING NEWS</h2>
        <CardUI
          data={this.props.news.filter((n) =>
            n.title.includes(this.state.searchTitle)
          )}
        ></CardUI>
      </div>
    );
  }
}

export default SearchByTitle;
