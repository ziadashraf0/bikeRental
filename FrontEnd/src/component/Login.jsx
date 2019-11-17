import React, { Component } from "react";

import "./Login.css";
import Register from "./Register";
import { validate } from "@babel/types";

class Login extends Component {
  state = {
    namee: " ",
    passwordd: " "
  };

  validateEmail = () => {
    this.state.namee = document.getElementById("username").value;
    this.state.passwordd = document.getElementById("password").value;

    var regexname = /\S+/;

    if (
      regexname.test(this.state.namee) == 0 ||
      regexname.test(this.state.passwordd) == 0
    ) {
      alert("validation");
    } else {
      let path = "/home";
      this.props.history.push(path);
    }
  };
  render() {
    return (
      <body id="login" className="backGround">
        <div className="card-body p-5 ">
          <h1 className="col-sm-6 offset-sm-3 text-center text-danger display-3">
            {" "}
            Login{" "}
          </h1>
          <div
            id="loginform"
            method="post"
            onSubmit={this.login}
            className="col-sm-6 offset-sm-3 text-center pt-5"
          >
            <form className="loginForm">
              <input
                type="text"
                validations={["required", "isEmail"]}
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                id="username"
                placeholder="User name"
                className="form-control input"
              />
              <br></br>
              <input
                type="password"
                validations={["required"]}
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                id="password"
                placeholder=" Password"
                className="form-control "
              />
            </form>
            <br></br>
            <div class="col text-cener"></div>
            <button className="btn btn-danger " onClick={this.validateEmail}>
              login
            </button>
          </div>
          <a className="bottom-left m-5" href="">
            About Us
          </a>
          <a className="cont bottom-left " href="">
            Contact Us
          </a>
        </div>
      </body>
    );
  }
}

export default Login;
