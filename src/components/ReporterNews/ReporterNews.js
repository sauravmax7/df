import React, { useState, useEffect } from "react";
import DataService from "../../services/service";

import "./reporter_news.css";
import { Card } from "react-bootstrap";
import { ReporterHeader } from "../ReporterDashboard/ReporterHead/ReporterHeader";

export const ListNewsByReporter = () => {
  const [news, setNews] = useState([]);
  const [currentNews, setCurrentNews] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveNews();
  }, []);
  const userId = sessionStorage.getItem("userId");

  const retrieveNews = () => {
    DataService.findAllNewsbyReporter(userId)

      .then((response) => {
        setNews(response.data);
     
      })
      .catch((e) => {
        alert(e);
      });
  };

  const setActiveNews = (news, index) => {
    setCurrentNews(news);
    setCurrentIndex(index);
  };

  return (
    <div>
      <ReporterHeader></ReporterHeader>
      <div className="main">
        {news &&
          news.map((newss, index) => (
            <Card
              style={{ width: "15rem" }}
              className={"cards " + (index === currentIndex ? "active" : "")}
              onClick={() => setActiveNews(newss, index)}
              key={index}
            >
              <Card.Img
                className="image1"
                variant="top"
                src={`../images/${newss.image}`}
              />
              <Card.Text> {newss.title}</Card.Text>
            </Card>
          ))}
      </div>
      <div className="news">
        {currentNews ? (
          <div className="full-card">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={`../images/${currentNews.image}`} />
              <Card.Body>
                <Card.Title>{currentNews.title}</Card.Title>
                <Card.Text>
                  <p>
                    <strong>{currentNews.extract}</strong>
                  </p>
                </Card.Text>
                <Card.Text>{currentNews.content}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a News...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListNewsByReporter;
