import React, { useState, useEffect } from "react";
import AdminDashboardService from "../../../services/admin.service";
import "./ReportNews.css";
import { Row, Col } from "react-bootstrap";

export const ReportNews = (props) => {
  const [news, setNews] = useState([]);
  const [report, setReport] = useState([]);

  useEffect(() => {
    const retrieveDetailedIssuedLog = () => {
      const data = JSON.stringify({
        newsid: props.match.params.news_id,
      });
      AdminDashboardService.getDetailedIssuedLog(data)
        .then((response) => {
          setReport(response.data);

     
        })
        .catch((e) => {
          alert(e);
        });
    };

    // function to retrieve detailed news
    const retrieveDetailedNews = () => {
      const data = JSON.stringify({
        newsid: props.match.params.news_id,
      });
      AdminDashboardService.getDetailednews(data)
        .then((response) => {
          setNews(response.data);
         
        })
        .catch((e) => {
          alert(e);
        });
    };

    retrieveDetailedNews();
    retrieveDetailedIssuedLog();
  }, []);

  //Delete news
  const deleteNews = (news_id) => {
    alert("News is deleted!");
    const data = JSON.stringify({
      newsid: news_id,
    });
    AdminDashboardService.deleteReportedNews(data)
      .catch((e) => {
        alert(e);
      });
  };

  //Retain news
  const retainNews = (news_id) => {
    alert("News is retain !");
    const data = JSON.stringify({
      newsid: news_id,
    });
    AdminDashboardService.retainReportedNews(data)
      .catch((e) => {
        alert(e);
      });
  };

  let newsobj;

  if (news[0] !== undefined) {
    newsobj = (
      <div>
        <div className="outerWrapper">
          <Row>
            <Col className="com category" xs="auto">
              {news[0].category_name}
            </Col>
          </Row>
          <Row>
            <Col className="com title" xs="auto">
              <h1>{news[0].title}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="com description" xs="auto">
              {news[0].extract}
            </Col>
          </Row>
          <Row>
            <Col className="com author-date" xs="auto">
              <span> By : {news[0].f_name}, </span>
              <span> Posted on : {news[0].postedon}</span>
            </Col>
          </Row>
          <Row>
            <Col className="com newsImage" xs="auto">
              <img src={`../../images/${news[0].image}`} alt=""></img>
            </Col>
          </Row>
          <Row>
            <Col className="com content" xs="auto">
              {news[0].content}
            </Col>
          </Row>
          <Row>
            <Col className="com content" xs="auto">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col"> Email </th>
                    <th scope="col">Report-category</th>
                    <th scope="col"> Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {report.map((p) => (
                    <tr key={p.user_id}> 
                      <td> {p.email} </td>
                      <td>{p.rc_name} </td>
                      <td> {p.comment} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>

          <button
            type="button"
            className="btn btn-outline-danger mr-3"
            onClick={() => deleteNews(news[0].news_id)}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => retainNews(news[0].news_id)}
          >
            Retain
          </button>
        </div>
      </div>
    );
  }

  return <div>{newsobj}</div>;
};
