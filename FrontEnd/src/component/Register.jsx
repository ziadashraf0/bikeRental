import React, { Component } from "react";
import { directive } from "@babel/types";
import "./Register.css";
import login from "./Login";
import Route from "react-router-dom/Route";
import {adminRegister} from "../services/adminRegisterService";

import {
  withRouter,
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
class Register extends Component {
  state = {
    namee: " ",
    passwordd: " ",
    email: "",
    SSN: ""
  };
  nextPath() {
    let path = "/login";
    this.props.history.push(path);
  }

  validateEmail = () => {
    this.state.namee = document.getElementById("username").value;
    this.state.passwordd = document.getElementById("password").value;
    this.state.email = document.getElementById("email").value;
    this.state.SSN = document.getElementById("SSN").value;
    var regex = /\S+@\S+\.\S+/;
    var regexname = /\S+/;

    if (
      regex.test(this.state.email) == 0 ||
      regexname.test(this.state.namee) == 0 ||
      regexname.test(this.state.passwordd) == 0 ||
      regexname.test(this.state.SSN) == 0
    ) {
      alert("validation error");
      this.props.history.push();
    } //else {
      //let path = "/home";
      //this.props.history.push(path);
    //}
    };
    async registerAdmin() {
        //this.validateEmail();
        const body = {
            "email": this.state.email,
            "SSN": this.state.SSN,
            "name": this.state.namee,
            "password": this.state.passwordd
        };
        console.log(body);
      await this. adminRegister(body);
        this.nextPath();
    };
  render() {
    return (
      <body className="register">
        <div className="container">
          <h1 className="col-sm-6 offset-sm-3 text-center text-danger display-3">
            {" "}
            Sign up{" "}
          </h1>
          <br></br>
          <form className="registerForm" id="registerForm" >
            <div className="form-group" className="text-center mb-5">
              <input
                type="text"
                name="userName"
                id="username"
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
                            onClick={

                                () => this.registerAdmin.bind(this)


                            }
              >
                Register
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

          <a className="bottom-left m-5" href="">
            About Us
          </a>
          <span className="cont">
            <a href="">Contact Us</a>
          </span>
        </div>
      </body>
    );
  }
}

export default Register;
