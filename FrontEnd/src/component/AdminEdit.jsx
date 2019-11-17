import React, { Component } from "react";
import { directive } from "@babel/types";
import "./AdimEdit.css";
import login from "./Login";

import Route from "react-router-dom/Route";
import {
  withRouter,
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
class Edit extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      email: null,
      phonenum: null
    };
  }

  render() {
    return (
      <body className="register">
        <div className="container">
          <h1 className="col-sm-6 offset-sm-3 text-center text-danger display-5">
            {" "}
            Edit Admin's page{" "}
          </h1>
          <br></br>
          <form className="form-inline">
            <div className="form-group mb-2">
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="password"
                  className="form-control m-3"
                  id="inputPassword2"
                  placeholder="Edit your email"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary mb-2 btn-danger">
                Edit
              </button>
            </div>
          </form>
          <form className="form-inline">
            <div className="form-group mb-2">
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="password"
                  className="form-control m-3"
                  id="inputPassword2"
                  placeholder="Edit your phone number"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary mb-2 btn-danger">
                Edit
              </button>
            </div>
          </form>
          <form className="form-inline">
            <div className="form-group mb-2">
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control m-3"
                  id="inputPassword2"
                  placeholder="Enter your old Password"
                ></input>
              </div>
            </div>
          </form>
          <form className="form-inline">
            <div className="form-group mb-2">
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control m-3"
                  id="inputPassword2"
                  placeholder="Enter new password"
                ></input>
              </div>
            </div>
          </form>
          <form className="form-inline">
            <div className="form-group mb-2">
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control m-3"
                  id="inputPassword2"
                  placeholder="Re-write new password"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary mb-2 btn-danger">
                Edit
              </button>
            </div>
          </form>
        </div>
      </body>
    );
  }
}
export default Edit;
