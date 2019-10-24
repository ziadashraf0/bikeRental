import React, { Component } from "react";
import "./OwnerInfo.css";
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
          <div className="handle">
            <button
              className="confirmButton btn-lg btn-primary m-2"
              onClick={this.handleConfirm}
            >
              Confirm
            </button>
            <button
              className="removeButton btn-lg btn-danger"
              onClick={this.handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
      </body>
    );
  }
}

export default information;
