import React, { useState } from "react";
import DataService from "../../services/service";
import { Link } from "react-router-dom";
import CategoryDropDown from "./CategoryDropdown";
import { Container } from "react-bootstrap";
import "./addnews.css";
import { ReporterHeader } from "../ReporterDashboard/ReporterHead/ReporterHeader";

const NewsAdd = () => {
  const cityId = sessionStorage.getItem("city");
  console.log(cityId);

  const userId = sessionStorage.getItem("userId");
  console.log(userId);

  const initialNewsState = {
    city_id: null,
    user_id: null,
    category_id: null,
    title: "",
    content: "",
    image: "",
    extract: "",
    readcount: 1,
    postedon: new Date(),
  };
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [news, setNews] = useState(initialNewsState);
  const [submitted, setSubmitted] = useState(false);
  const [catId, setCatId] = useState(0);

  console.log(catId);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNews({ ...news, [name]: value });
  };

  const onChange = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };
  console.log(news);
  console.log(filename);

  const saveNews = () => {
    const formdata = new FormData();
    formdata.append("city_id", cityId);
    formdata.append("user_id", userId);
    formdata.append("category_id", catId);
    formdata.append("title", news.title);
    formdata.append("content", news.content);
    formdata.append("image", filename);
    formdata.append("file", file);
    formdata.append("extract", news.extract);
    formdata.append("readcount", news.readcount);
    formdata.append("postedon", news.postedon);

    console.log(formdata.values());
    DataService.createNews(formdata)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newNews = () => {
    setNews(initialNewsState);
    setSubmitted(false);
  };

  return (
    <div className="reporter-newsadd">
      <ReporterHeader></ReporterHeader>

      <div className="submit-form">
      {submitted ? (
          <div>
            <h4>News Added!</h4>

            <Link to={"/reporter"} className="nav-link">
              My Dashboard
            </Link>
          </div>
        ) : (
          <Container className="addnews">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="News title"
                id="title"
                required
                value={news.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>

            <div className="form-group">
              <label>Select Category</label>
              <CategoryDropDown getValue={(value) => setCatId(value)} />
            </div>

            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                rows="10"
                maxLength="450"
                placeholder="Add the description of news (limit:450words)"
                className="form-control"
                id="content"
                required
                value={news.content}
                onChange={handleInputChange}
                name="content"
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                required
                //value={news.image}
                onChange={onChange}
                name="image"
              />
            </div>

            <div className="form-group">
              <label htmlFor="extract">Extract</label>
              <input
                type="text"
                className="form-control"
                id="extract"
                required
                value={news.extract}
                placeholder="Add abstract"
                onChange={handleInputChange}
                name="extract"
              />
            </div>

            <button onClick={saveNews} className="btn btn-success">
              Submit
            </button>
          </Container>
        )}
      </div>
    </div>
  );
};

export default NewsAdd;
