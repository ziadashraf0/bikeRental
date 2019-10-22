import React, { Component } from "react";
import { directive } from "@babel/types";
import "./Register.css";
import login from "./Login";
import Route from "react-router-dom/Route";
import {
  withRouter,
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
class Register extends Component {
  state = {};
  nextPath() {
    let path = "/login";
    this.props.history.push(path);
  }
  home() {
    let path = "/home";
    this.props.history.push(path);
  }
  render() {
    return (
      <body className="register">
        <div className="container">
          <h1 className="col-sm-6 offset-sm-3 text-center text-danger display-3">
            {" "}
            Sign up{" "}
          </h1>
          <br></br>
          <form className="registerForm" id="registerForm" method="post">
            <div class="form-group" className="text-center mb-5">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your UserName"
                className="form-control "
              />
              <br></br>
              <input
                type="name"
                name="SSN"
                id="SSN"
                placeholder="Enter your SSN"
                className="form-control "
              />
              <br></br>
              <input
                type="text"
                validations={["required", "isEmail"]}
                name="email"
                id="email"
                placeholder="Enter your email address."
                className="form-control "
              />
              <br></br>
              <input
                type="password"
                validations={["required"]}
                name="password"
                id="password"
                placeholder="Enter your password."
                className="form-control "
              />
              <br></br>
              <button
                className="btn btn-danger m-3"
                onClick={() => this.home()}
              >
                Sign up
              </button>
              {/* <button
              className="btn btn-danger m-3"
              onClick={() => this.nextPath()}
            >
              hy
            </button> */}
              <a onClick={() => this.nextPath()} href="">
                Login
              </a>
            </div>
          </form>
        </div>
      </body>
    );
  }
}

export default Register;
