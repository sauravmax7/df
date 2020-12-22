import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-wrapper">
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
                {/* Signup */}
                <div className="signup d-block d-xs-inline-block">
                  <Link to="/register" class="signup-btn">
                    <i className="fa fa-user"></i>Sign up
                  </Link>
                </div>
                {/* Login */}
                <div className="login d-block d-xs-inline-block">
                  <Link to="/login" class="login-btn">
                    <i className="fa fa-sign-in"></i>Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
