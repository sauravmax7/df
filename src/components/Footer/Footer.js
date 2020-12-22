import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 ">
          @All rights reserved
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item">
              <i className="fa fa-facebook"></i>
            </li>
            <li className="list-inline-item">
              <i className="fa fa-twitter"></i>
            </li>
            <li className="list-inline-item">
              <i className="fa fa-instagram"></i>
            </li>
            <li className="list-inline-item">
              <i className="fa fa-google-plus"></i>
            </li>
            <li className="list-inline-item">
              <i className="fa fa-envelope"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
