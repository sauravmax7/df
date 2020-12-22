import React from "react";
// import "./Login.css";
import "../Login/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import DataService from "../../services/service";

export class NewPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newPassword: "", confirmPassword: "", redirect: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCancel(event) {
    this.setState({
      redirect: !this.state.redirect,
    });
    event.preventDefault();
  }

  handleSubmit(event) {
    const userEmail = sessionStorage.getItem("email");
    const newPassword = this.state.newPassword;
    const confirmPassword = this.state.confirmPassword;
    if (newPassword === "" || confirmPassword === "") {
      alert("Enter passwords first!!!");
    } else if (newPassword !== confirmPassword) {
      alert("Password did not match!!!");
    } else {
      DataService.updatePassword(userEmail, newPassword).then(() => {
        alert("Password reset successfull!!!");
        this.setState({
          redirect: !this.state.redirect,
        });
      });
    }
    event.preventDefault();
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/login" />;
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
                    <h3 className="display-4 text-center text-info">
                      Set New Password
                    </h3>
                    <br></br>
                    <div className="form-group">
                      <label className="text-info">New password:</label>
                      <br></br>
                      <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        value={this.state.userEmail}
                        onChange={this.handleChange}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label className="text-info">Confirm New Password:</label>
                      <br></br>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
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
                        Set Password
                      </button>
                    </div>
                    <div id="forgot-link" className="text-left">
                      <button
                        type="button"
                        onClick={this.handleCancel}
                        className="btn btn-danger btn-block"
                      >
                        Cancel
                      </button>
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
