import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import AdminNavbar from "./Navbar/AdminNavbar";
import "./Index.css";

function Index() {
  return (
    <div className="admin-wrapper">
      <BrowserRouter>
        <AdminNavbar></AdminNavbar>
        <Navigation></Navigation>
      </BrowserRouter>
    </div>
  );
}

export default Index;
