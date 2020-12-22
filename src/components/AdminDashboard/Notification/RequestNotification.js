import React, { useState, useEffect } from "react";
import AdminDashboardService from "../../../services/admin.service";
import "./RequestNotification.css";

export const RequestNotification = () => {
  const [users, setRequest] = useState([]);

  //Update  requests status of users
  const updateStatus = (user_id, status, mail) => {
  
    let data = JSON.stringify({
      userid: user_id,
      status: status,
      email: mail,
    });
    AdminDashboardService.updateStatus(data)
      .catch((e) => {
        alert(e);
      });
    alert("Pending request is " + status);
  };

  useEffect(() => {
    retrievePendingUsers();
  }, []);

  //function to retrieve pending requests of users
  const retrievePendingUsers = () => {
    AdminDashboardService.getPendingRequests()
      .then((response) => {
        setRequest(response.data);
      })
      .catch((e) => {
      alert(e);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Notification
                  </a>
                  <ul className="dropdown-menu notify-drop">
                    <div className="notify-drop-title">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          Pending Requests*
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                          <a
                            href=""
                            className="rIcon allRead"
                            data-tooltip="tooltip"
                            data-placement="bottom"
                            title="tümü okundu."
                          >
                            <i className="fa fa-dot-circle-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="drop-content">
                      {users.map((p) => (
                        <li key={p.user_id}>
                          <a href="" className="rIcon">
                            <i className="fa fa-dot-circle-o"></i>
                          </a>
                         
                          <div className="col-md-9 col-sm-9 col-xs-9">
                            <b>
                         
                              {p.f_name} {p.l_name}
                            </b>
                            <br />
                            Email : {p.email}
                            <br />
                            Date of birth : {p.dob}
                            <br />
                            Certificate :{p.certificate}
                            <br />
                            City: {p.c_name}
                            <br />
                            <button
                              type="button"
                              className="btn btn-outline-info mr-3"
                              onClick={() =>
                                updateStatus(p.user_id, "approved", p.email)
                              }
                            >
                              Accept
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              onClick={() =>
                                updateStatus(p.user_id, "denied", p.email)
                              }
                            >
                              Deny
                            </button>
                          </div>
                        </li>
                      ))}
                    </div>
                    <div className="notify-drop-footer text-center">
                      <a href=""></a>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
