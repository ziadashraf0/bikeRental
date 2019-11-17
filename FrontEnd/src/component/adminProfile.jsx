import React, { Component } from "react";
import "./adminProfile.css";
class information extends Component {
  state = {};
  render() {
    return (
      <body className="test">
        <div>
          <table class="table text-light">
            <tbody>
              <th scope="row">Image</th>

              <th scope="col">{this.state.Image}</th>
              <tr>
                <th scope="row">SSN</th>

                <th scope="col">{this.state.SSN}</th>
              </tr>
              <tr>
                <th scope="row">Username</th>
                <th scope="col">{this.state.userName}</th>
              </tr>

              <tr>
                <th scope="row">Email</th>
                <th scope="col">{this.state.email}</th>
              </tr>

              <tr>
                <th scope="row">bikeID</th>
                <th scope="col">{this.state.bikeID}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    );
  }
}

export default information;
