import React, { Component } from "react";

import "./Login.css";
import Register from "./Register";

class Login extends Component {
  state = {};
  home() {
    let path = "/home";
    this.props.history.push(path);
  }
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
                id="email"
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
            <button className="btn btn-danger " onClick={() => this.home()}>
              login
            </button>
          </div>
        </div>
      </body>
    );
  }
}

export default Login;
