import React, { Component } from "react";
import { directive } from "@babel/types";
import "./AdimEdit.css";
import login from "./Login";
import { adminEditEmail, adminEditPhone, adminEditPassword,adminEditBirthDate } from "../services/adminServices";

import Route from "react-router-dom/Route";
import {
  withRouter,
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
class Edit extends Component {
    state = {
        name: "",
        password: "",
        email: "",
        SSN: "",
        phoneNumber: "",
        newPassword: "",
        newPassword2: "",
        birthDate: ""
};
    reqBody = {
        name: "",
        password: " ",
        email: "",
        SSN: "",
        newPassword: "",
        phoneNumber: "",
        birthDate:""
    };
  constructor() {
    super();
    this.state = {
      email: null,
      phonenum: null
    };
    }
    validateEmail = () => {
        
        this.state.email = document.getElementById("email").value;
       // alert(this.state.email);
        var regex = /\S+@\S+\.\S+/;

        if (
            regex.test(this.state.email) == 0 
            

        ) {
            alert("validation error");
            this.props.history.push();
            return false;
        }
        return true;

    };
    validatePhoneNumber = () => {
        this.state.phoneNumber = document.getElementById("phoneNumber").value;
        
        var regexname = /\S+/;

        if (

            regexname.test(this.state.phoneNumber) == 0 
           

        ) {
            alert("validation error");
            this.props.history.push();
            return false;
        }
        return true;

    };
    validatePassword = () => {
        this.state.newPassword = document.getElementById("newPassword1").value;
        this.state.password = document.getElementById("oldPassword").value;
        this.state.newPassword2 = document.getElementById("newPassword2").value;
        var regexname = /\S+/;

        if (
            regexname.test(this.state.newPassword) == 0 ||
            regexname.test(this.state.password) == 0 ||
            regexname.test(this.state.newPassword2) == 0

        ) {
            alert("validation error");
            this.props.history.push();
            return false;
        }
        if (this.state.newPassword !== this.state.newPassword2) {
            alert("Two new passwords do not match");
            this.props.history.push();
            return false;

        }
        return true;

    };
    validateBirthDate = () => {
        this.state.birthDate = document.getElementById("birthDate").value;
        console.log(this.state.birthDate);
        var regexname = /\S+/;

        if (

            regexname.test(this.state.birthDate) == 0


        ) {
            alert("validation error");
            this.props.history.push();
            return false;
        }
        return true;

    };
    async onClickEmail() {

        if (this.validateEmail()) {
            this.reqBody.email = this.state.email;
            this.reqBody.userName = this.props.location.state.userName
            try {
                await adminEditEmail(this.reqBody)
                ///this.nextPath();
            } catch (error) {
                if (error.response.status === 400) {
                    alert('already exists');
                }
                else if (error.response.status === 404) {
                    alert('Not Found');
                }
            };




        }
    }
    async onClickPhoneNumber() {

        if (this.validatePhoneNumber()) {

            this.reqBody.phoneNumber = this.state.phoneNumber
            console.log(this.reqBody.phoneNumber);
            this.reqBody.userName = this.props.location.state.userName             //this.state.userName
            try {
                await adminEditPhone(this.reqBody)
                
            } catch (error) {
                if (error.response.status === 404) {
                    alert('NotFound');
                }
            };




        }
    }
    async onClickPassword() {

        if (this.validatePassword()) {

            this.reqBody.password = this.state.password;
            this.reqBody.newPassword = this.state.newPassword;
            //console.log(this.reqBody.phoneNumber);
            this.reqBody.userName = this.props.location.state.userName             //this.state.userName
            try {
                await adminEditPassword(this.reqBody)

            } catch (error) {
                if (error.response.status === 404) {
                    alert('Wrong Password');

                } else if (error.response.status === 400) {
                    alert("Invalid password");
                }
            };




        }
    }
    async onClickBirthDate() {

        if (this.validateBirthDate()) {

            this.reqBody.birthDate = this.state.birthDate
            console.log(this.reqBody.birthDate);
            this.reqBody.userName = this.props.location.state.userName            //this.state.userName
            try {
                await adminEditBirthDate(this.reqBody)

            } catch (error) {
                if (error.response.status === 404) {
                    alert('NotFound');
                }
            };




        }
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
          
              <div className=" mx-sm-3 mb-2">
                <input
                 
                  className=" m-3"
                  id="email"
                  placeholder="Edit your email"
                ></input>
                <button  className="btn btn-primary mb-2 btn-danger" onClick={this.onClickEmail.bind(this)} >
                Edit Email
              </button>
              </div>
                    
          
          
              <div className=" smx-sm-3 mb-2">
                <input
                  
                  className=" m-3"
                  id="phoneNumber"
                  placeholder="Edit your phone number"
                ></input>
                 <button  className="btn btn-primary mb-2 btn-danger" onClick={this.onClickPhoneNumber.bind(this)}>
               Edit Phone Number
              </button>
              </div>
                       
          <form className="form-inline">
            <div className="form-group mb-2">
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control m-3"
                  id="oldPassword"
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
                  id="newPassword1"
                  placeholder="Enter new password"
                ></input>
              </div>
            </div>
          </form>
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  className=" m-3"
                  id="newPassword2"
                  placeholder="Re-write new password"
                ></input>
                 <button type="submit" className="btn btn-primary mb-2 btn-danger" onClick={this.onClickPassword.bind(this)}>
                Edit Password
              </button>
              </div>
                       
                        <div className="mx-sm-3 mb-2">
                            <input
                                type="date"
                                className=" m-3"
                                id="birthDate"
                                placeholder="Edit your Birth Date"
                            ></input>
                                 <button className="btn btn-primary mb-2 btn-danger" onClick={this.onClickBirthDate.bind(this)} >
                            Edit Birth Date
              </button>
                        </div>
                   
        </div>
      </body>
    );
  }
}
export default Edit;
