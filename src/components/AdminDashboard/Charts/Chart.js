import React from "react";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import MostReadChart from "./MostReadChart";
import MostReadNewsBarChart from "./MostReadNewsBarChart";
import "./Chart.css";

const Chart = () => {
  return (
    <>
      <div className="all-graph">
        <h3>Line Graph</h3>
        <BarGraph></BarGraph>
        <LineGraph></LineGraph>
        <br />
        <br />
        <h3>Most Read News</h3>
        <MostReadNewsBarChart></MostReadNewsBarChart>
        <MostReadChart></MostReadChart>
      </div>
    </>
  );
};

export default Chart;
