import React from "react";

import { Link } from "react-router-dom";
import "./reporter.css";

import { Container } from "react-bootstrap";
import { ReporterHeader } from "./ReporterHead/ReporterHeader";
import DataService from "../../services/service";

export class ReporterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    const email = sessionStorage.getItem("email");
  
    DataService.getUserByEmail(email).then((response) => {
      let users = response.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div>
        <ReporterHeader></ReporterHeader>
        <Container className="r_dashboard">
          {this.state.users.map((u) => {
            return (
              <div className="container1 emp-profile" key={u.user_id}>
                <form className="profile" method="post">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="profile-img">
                        <img alt="" src="../images/user.png" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="profile-head">
                        <h5>
                          {u.f_name} {u.l_name}
                        </h5>
                        <h6>{u.role}</h6>

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="home-tab"
                              data-toggle="tab"
                              href="#"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              About
                            </a>
                          </li>

                          <li className="nav-item">
                            <Link to={"/news/reporter"} className="nav-link">
                              Timeline
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="profile-work">
                        <p>WORK LINK</p>
                        <Link to={"/news/city"} className="nav-link">
                          News near my location
                        </Link>

                        <Link to={"/news/reporter"} className="nav-link">
                          My News
                        </Link>

                        <Link to={"/addn"} className="nav-link">
                          Add news
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div
                        className="tab-content profile-tab"
                        id="myTabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <label>Name</label>
                            </div>
                            <div className="col-md-6">
                              <p>
                                {u.f_name} {u.l_name}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label>Email</label>
                            </div>
                            <div className="col-md-6">
                              <p>{u.email}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label>DOB</label>
                            </div>
                            <div className="col-md-6">
                              <p>{u.dob}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label>Profession</label>
                            </div>
                            <div className="col-md-6">
                              <p>{u.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            );
          })}
        </Container>
      </div>
    );
  }
}
