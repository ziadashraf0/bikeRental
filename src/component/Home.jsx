import React, { Component, useState } from "react";
import Dialog from "react-dialog";
import "./Home.css";
class Home extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      isConfirmDialogOpen: false,
      isRemoveDialogOpen: false
    };
  }

  openConfirmDialog = () => this.setState({ isConfirmDialogOpen: true });
  openRemoveDialog = () => this.setState({ isRemoveDialogOpen: true });

  handleConfirmClose = () => this.setState({ isConfirmDialogOpen: false });
  handleRemoveClose = () => this.setState({ isRemoveDialogOpen: false });

  render() {
    return (
      <div className="homeContainer">
        <div className="bar bg-dark border border-danger float-left p-2">
          <span>
            <h1 className="font-italic font-weight-bold text-primary">
              BikeRental
            </h1>
          </span>

          <ul>
            <li className=" text-danger">Dashboard</li>
            <li className=" text-info">sign out</li>
          </ul>
        </div>
        <div className="handle">
          <div className="confirmOwner ">
            <button
              className="btn btn-primary m-2 dropdown-toggle"
              id="dropdownMenuButton"
              onClick={this.openConfirmDialog}
            >
              Confirm Owner
            </button>
          </div>

          <div className="removeOwner">
            <button
              className="btn btn-danger m-2"
              onClick={this.openRemoveDialog}
            >
              Remove Owner
            </button>
          </div>
        </div>
        {this.state.isConfirmDialogOpen && (
          <dialog
            className="border-primary bg-secondary "
            modal={false}
            open={true}
          >
            <form>
              <input
                type="number"
                id="confirmSSN"
                placeholder="Enter SSN to remove owner"
              ></input>
            </form>
            <button
              className="btn-danger m-2"
              onClick={this.handleConfirmClose}
            >
              Confirm
            </button>
          </dialog>
        )}
        {this.state.isRemoveDialogOpen && (
          <dialog
            className="border-primary bg-secondary"
            modal={false}
            open={true}
          >
            <form>
              <input
                type="number"
                id="removeSSN"
                placeholder="Enter SSN to remove owner"
              ></input>
            </form>
            <button className="btn-danger m-2" onClick={this.handleRemoveClose}>
              Remove
            </button>
          </dialog>
        )}
        <div className="users bg-primary ">
          <span className="usersText font-italic font-weight-bold">Users</span>
        </div>
      </div>
    );
  }
}

export default Home;
