import React from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DataService from "../../services/service";
import { Link } from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      redirectOnCancel: false,
      redirectToReporter: false,
      redirectToAdmin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
//cancel button redirect
  handleCancel(event) {
    this.setState({
      redirectOnCancel: !this.state.redirectOnCancel,
    });
    event.preventDefault();
  }
//check role function
  checkRole() {
    this.setState({
      redirectToAdmin: !this.state.redirectToAdmin,
    });
  }
//authentication
  handleSubmit(event) {
    let email = this.state.userEmail;
    let password = this.state.userPassword;

    if (email === "" || password === "") {
      alert("Enter credentials first!!!");
    } else {
      DataService.getUserByEmail(email).then((data) => {
      
        let user = data.data;
        let status = "approved";
        let userId = user[0].user_id;
        let cityId = user[0].city_id;
      
        if (user[0].role !== "Admin") {
          if (
            email === user[0].email &&
            password === user[0].password &&
            status === user[0].status
          ) {
            this.setState({
              redirectToReporter: !this.state.redirectToReporter,
            });
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("city", cityId);
            alert("login successfull");
          } else if (email !== user[0].email || password !== user[0].password) {
            alert("Invalid username or password!!!");
          } else if (user[0].status === "Rejected") {
            alert("Sorry, your application is rejected.");
          } else {
            alert(
              "Your application is under process. Please wait for confirmation email!"
            );
          }
        } else {
          if (email === user[0].email && password === user[0].password) {
            sessionStorage.setItem("email", email);
            this.setState({
              redirectToAdmin: true,
            });
            alert("login successfull!!!");
          } else if (email !== user[0].email || password !== user[0].password) {
            alert("Invalid username or password!!!");
          }
        }
      });
    }
    event.preventDefault();
  }
  render() {
    const {
      redirectOnCancel,
      redirectToReporter,
      redirectToAdmin,
    } = this.state;
    if (redirectToReporter) {
      return <Redirect to="/reporter" />;
    }
    if (redirectToAdmin) {
      return <Redirect to="/admin" />;
    }
    if (redirectOnCancel) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-wrapper">
        <div id="login">
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form
                    id="login-form"
                    className="form"
                    onSubmit={this.handleSubmit}
                  >
                    <h3 className="display-4 text-center text-info">Login</h3>
                    <div className="form-group">
                      <label className="text-info">Email:</label>
                      <br></br>
                      <input
                        type="email"
                        name="userEmail"
                        id="userEmail"
                        value={this.state.userEmail}
                        onChange={this.handleChange}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label className="text-info">Password:</label>
                      <br></br>
                      <input
                        type="password"
                        name="userPassword"
                        value={this.state.userPassword}
                        onChange={this.handleChange}
                        id="userPassword"
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Login
                      </button>
                      <button
                        type="button"
                        onClick={this.handleCancel}
                        className="btn btn-danger btn-block"
                      >
                        Cancel
                      </button>
                    </div>
                    <div id="forgot-link" className="text-left">
                      Forgot password?{" "}
                      <Link to={`/forgotpassword`}>Click here</Link>
                    </div>
                    <div id="register-link" className="text-left">
                      Not a registered reporter?{" "}
                      <Link to={`/register`}>Apply Here</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
