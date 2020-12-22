import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminDashboardService from "../../../services/admin.service";

export const ReportedNewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    retrieveReportedNews();
  }, []);

  //to retieve all reported news by users
  const retrieveReportedNews = () => {
    AdminDashboardService.getIssueCount()
      .then((response) => {
        setNews(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div className="myTable">
      <table className="table table-hover">
        <thead>
          <th scope="col">News Title</th>
          <th scope="col">Extract</th>
          <th scope="col">Count</th>
        </thead>
        <tbody>
          {news.map((n) => (
            <tr key={n.news_id}>
              <td>{n.title}</td>
              <td> {n.extract}</td>
              <td>
                <Link to={`/reportNews/${n.news_id}`}>
                  <span className="badge badge-primary badge-pill">
                    {n.count}
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
