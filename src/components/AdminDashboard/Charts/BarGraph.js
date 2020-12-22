import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import AdminDashboardService from "../../../services/admin.service";

const BarGraph = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let categoryCount = [];
    let categoryName = [];

    AdminDashboardService.categorywiseNewsCount()
      .then((response) => {
        setChartData(response.data);
        for (const dataObj of response.data) {
          categoryCount.push(parseInt(dataObj.count));
          categoryName.push(JSON.stringify(dataObj.category_name));
        }

        setChartData({
          labels: categoryName,
          datasets: [
            {
              label: "News Categories",
              data: categoryCount,
              borderColor: [
                "rgba(194,152,28,1)",
                "rgba(255,197,209,1)",
                "rgba(207,207,207,1)",
                "rgba(195,224,97,1)",
                "rgba(86,135,255,1)",
              ],
              backgroundColor: [
                "rgba(194,152,28,1)",
                "rgba(255,197,209,1)",
                "rgba(207,207,207,1)",
                "rgba(195,224,97,1)",
                "rgba(86,135,255,1)",
              ],
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
      text: "Statistics",
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
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarGraph;
