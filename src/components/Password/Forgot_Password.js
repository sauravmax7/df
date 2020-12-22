import React from "react";
import "../Login/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import DataService from "../../services/service";

export class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      secQuestion: "",
      redirectToLogin: false,
      session: [],
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
      redirectToLogin: !this.state.redirectToLogin,
    });
    event.preventDefault();
  }
//authenctication logic
  handleSubmit(event) {
    let email = this.state.userEmail;
    let secQuestion = this.state.secQuestion;

    if (email === "" || secQuestion === "") {
      alert("Enter data in the fields first!!!");
    } else {
      DataService.getUserByEmail(email).then((data) => {
     
        let user = data.data;

        if (email === user[0].email && secQuestion === user[0].mothername) {
          alert("verification successful");
          this.setState({
            session: this.state.userEmail,
            redirect: !this.state.redirect,
          });
          const uEmail = this.state.session;
          sessionStorage.setItem("email", uEmail);
        } else {
          alert("Invalid email or answer!!!");
        }
      });
    }
    event.preventDefault();
  }

  render() {
    const { redirect, redirectToLogin } = this.state;
    if (redirect) {
      return <Redirect to="/newpassword" />;
    }
    if (redirectToLogin) {
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
                      Forgot Password?
                    </h3>
                    <br></br>
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
                      <label className="text-info">Mother&apos;s name:</label>
                      <br></br>
                      <input
                        type="text"
                        name="secQuestion"
                        value={this.state.secQuestion}
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
                        Password Reset
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
