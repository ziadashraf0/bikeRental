import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="p-5 text-center">
          <h1>Sign up</h1>
        </div>

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

            <button className="btn btn-danger m-3">login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
