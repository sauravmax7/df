import React from "react";
import "./ReporterHeader.css";

export const ReporterHeader = () => {
  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  return (
    <header>
      <div className="top-bar">
        <div>
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <p>
                <h4>Public News Board</h4>
              </p>
            </div>
            <div className="col-md-6 ">
              <div className="d-flex justify-content-md-end justify-content-between">
                <div className="login d-block d-xs-inline-block">
                  <a href="#" onClick={logout}>
                    LOGOUT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
