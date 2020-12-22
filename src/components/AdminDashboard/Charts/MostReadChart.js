import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import AdminDashboardService from "../../../services/admin.service";
import "./MostReadNewsChart.css";

const MostReadChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let newsCount = [];
    let newsName = [];

    AdminDashboardService.getMostReadNews()
      .then((response) => {
        setChartData(response.data);
     
        for (const dataObj of response.data) {
          newsCount.push(parseInt(dataObj.readcount));
          newsName.push(JSON.stringify(dataObj.title));
        }

        setChartData({
          labels: newsName,
          datasets: [
            {
              label: "News Categories",
              data: newsCount,
              borderColor: ["rgba(194,152,28,0.5)"],
              backgroundColor: ["rgba(194,152,28,0.5)"],
              borderWidth: 2,
              response: true,
            },
          ],
        });
    
      })
      .catch((e) => {
       alert(e);
      });
  };

  const options = {
    title: {
      display: true,
      text: "Most Read News",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 10,
          },
        
        },
      ],
    },
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="Graph">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MostReadChart;
