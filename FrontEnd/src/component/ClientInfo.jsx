import React, { Component } from "react";
import "./OwnerInfo.css";
import { ownerInformationSearch } from "../services/ownerServices";

class ClientInfo extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {};
    this.reqBody = {};
  }
  edit() {
    let path = "/edit";
    this.props.history.push({
      pathname: path,
      state: {
        userName: this.props.location.state.userName
      }
    });
  }
  adminProfile() {
    let path = "/adminProfile";

    this.props.history.push(path);
  }
  home() {
    let path = "/home";

    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <a href="" onClick={() => this.home()}>
            Home
          </a>
          <a href="" onClick={() => this.adminProfile()}>
            View profile
          </a>
          <a href="" onClick={() => this.edit()}>
            Edit profile
          </a>
          <a href="">Send promocodes</a>
        </div>
        <h1 className="header text-center text-white font-weight-bold font-weight-bold">
          Client Information
        </h1>
        <table className="table text-light">
          <tbody>
            <tr>
              <th scope="row">SSN</th>

              <th scope="col">{this.props.location.state.result[0].SSN}</th>
            </tr>
            <tr>
              <th scope="row">First Name</th>
              <th scope="col">
                {this.props.location.state.result[0].firstName}
              </th>
            </tr>
            <tr>
              <th scope="row">Last Name</th>
              <th scope="col">
                {this.props.location.state.result[0].lastName}
              </th>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <th scope="col">{this.props.location.state.result[0].email}</th>
            </tr>

            <tr>
              <th scope="row">PhoneNumber</th>
              <th scope="col">
                {this.props.location.state.result[0].phoneNumber}
              </th>
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
    );
  }
}

export default ClientInfo;
