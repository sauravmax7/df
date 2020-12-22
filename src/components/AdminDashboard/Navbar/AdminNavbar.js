import React from "react";
import "./AdminNavbar.css";
import Navbar from "react-bootstrap/Navbar";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  
  const Logout = () => {
    sessionStorage.clear();
window.location.href="/Allnews";
  };
  const Home = () => {
  window.location.href="/Allnews";
  };


  return (
    <div className="admin-navbar">
      <Navbar bg="dark" variant="dark">
        <img src="../images/adminAvatar.jpg" alt="logo" className="logo"></img>
        <Navbar.Brand href="#home">Admin-Dashboard</Navbar.Brand>

        <nav className="navbar  navbar-expand-sm ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item"></li>

            <li className="nav-item ">
              <Link className="link" to="/requestNotifications">
                Notifications
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="link" onClick={Home}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" onClick={Logout}>
                Logout
        
              </Link>
            </li>
          </ul>
        </nav>
      </Navbar>
    </div>
  );
  
};
export default AdminNavbar;
