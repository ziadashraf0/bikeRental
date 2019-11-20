import React, { Component } from "react";
import { directive } from "@babel/types";
import "./Register.css";
import login from "./Login";
import Route from "react-router-dom/Route";
import { adminRegister} from "../services/adminServices";

import {
  withRouter,
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
class Register extends Component {
    reqBody = {
        name: "",
        password: " ",
        email: "",
        SSN: ""
    };
  state = {
    namee: "",
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
        return false;
      }
      return true;
   
    };
   
  async onClick() {

        if (this.validateEmail()) {
            this.reqBody.name = this.state.namee
            this.reqBody.email = this.state.email
            this.reqBody.password = this.state.passwordd
            this.reqBody.SSN = this.state.SSN
           
            try {
                await adminRegister(this.reqBody)
                this.nextPath();
            } catch(error){
                if (error.response.status === 400) {
                    alert('already exists');
                }
            };
            



        }
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
                            type="button"
                            onClick={this.onClick.bind(this)}
                            
                         
                    
      >
        Register
              </button>

              {}
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
