import React, { Component } from "react";
import "./adminProfile.css";
//import { adminProfile } from "../services/adminServices";
class information extends Component {
  state = {
    userName: "",
    SSN: "",
    email: "",
    phoneNum: ""
  };

  render() {
    return (
      <body className="test">
        <div>
          <table class="table text-light">
            <tbody>
              <tr>
                <th scope="row">SSN</th>

                <th scope="col">{this.props.location.state.SSN}</th>
              </tr>
              <tr>
                <th scope="row">Username</th>
                <th scope="col">{this.props.location.state.userName}</th>
              </tr>

              <tr>
                <th scope="row">Email</th>
                <th scope="col">{this.props.location.state.email}</th>
              </tr>

              <tr>
                <th scope="row">Phone number</th>
                <th scope="col">{this.props.location.state.phoneNum}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    );
  }
}

export default information;
