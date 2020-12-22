import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import AdminDashboardService from "../../../services/admin.service";
import './MostReadNewsChart.css';



const MostReadNewsBarChart = () => {

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
                            label: 'News Categories',
                            data: newsCount,
                            borderColor: ['rgba(194,152,28,1)','rgba(255,197,209,1)','rgba(207,207,207,1)','rgba(195,224,97,1)','rgba(86,135,255,1)'],
                            backgroundColor: ['rgba(194,152,28,1)','rgba(255,197,209,1)','rgba(207,207,207,1)','rgba(195,224,97,1)','rgba(86,135,255,1)'],
                            response:true
                        }
                    ]

                })
              
            })
            .catch((e) => {
                alert(e);
            });
    };
    




const options = {
    width:"300",
    height:"300",
    title: {
        display: true,
        text: "Most Read News",
    },
    scales: {
        
        yAxes: [
            {
                ticks: {
                    min: 0,
                    max:100,
                    stepSize:10,
                },
              
            },
        ],
    },
};

useEffect(() => {
    chart()
}, []);

return (
    <div className="Graph">

        <Bar data={chartData} options={options} />

    </div>

)

};



export default MostReadNewsBarChart;