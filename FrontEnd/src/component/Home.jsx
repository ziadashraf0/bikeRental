import React, { Component, useState } from "react";
import Dialog from "react-dialog";
import "./Home.css";
class Home extends Component {
  state = {};
  edit() {
    let path = "/edit";
    this.props.history.push(path);
  }
  home() {
    let path = "/home";
    this.props.history.push(path);
  }
  search() {
    let path = "/owner";
    this.props.history.push(path);
  }
  adminProfile() {
    let path = "/adminProfile";
    this.props.history.push(path);
  }

  constructor() {
    super();
    this.state = {
      isConfirmDialogOpen: false,
      isRemoveDialogOpen: false,
      isPromoCodeDialogOpen: false
    };
  }

  // openConfirmDialog = () => this.setState({ isConfirmDialogOpen: true });
  // openRemoveDialog = () => this.setState({ isRemoveDialogOpen: true });
  openPromoCodeDialog = () => this.setState({ isPromoCodeDialogOpen: true });

  // handleConfirmClose = () => this.setState({ isConfirmDialogOpen: false });
  // handleRemoveClose = () => this.setState({ isRemoveDialogOpen: false });
  handlePromoCodeClose = () => this.setState({ isPromoCodeDialogOpen: false });
  render() {
    return (
      <body>
        <div>
          <div class="navbar">
            <a href="" onClick={() => this.adminProfile()}>
              View profile
            </a>
            <a href="" onClick={() => this.edit()}>
              Edit profile
            </a>
            <a href="">Send promocodes</a>
          </div>

          <div className="handle">
            <div>
              <form>
                <input
                  className="search  ml-2 "
                  type="text"
                  placeholder="Search"
                  onChange={this.filterList}
                />
                <button
                  className=" searchButton btn btn-primary m-2 "
                  id="searchButton"
                  onClick={() => this.search()}
                >
                  Search
                </button>
              </form>
            </div>
            <div className="confirmOwner ">
              <button
                className="btn btn-primary m-2 dropdown-toggle"
                id="dropdownMenuButton"
                onClick={this.openPromoCodeDialog}
              >
                Add Bikes
              </button>
            </div>
          </div>
          {this.state.isPromoCodeDialogOpen && (
            <dialog className="box border-primary" modal={false} open={true}>
              <form className="confirmForm text-light">
                <div className="form-group  ">
                  <label>Add Owner SSN: </label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Add Bike Category: </label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Add Bike Color: </label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Add Bike Size: </label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Add Bike Rate: </label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Add Bike Condition: </label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Bike"
                    className="btn btn-primary"
                    onClick={this.handlePromoCodeClose}
                  />

                  <input
                    type="submit"
                    value="Cancel"
                    className="btn btn-danger m-2 "
                    onClick={this.handlePromoCodeClose}
                  />
                </div>
              </form>
            </dialog>
          )}

          {/* <div className="removeOwner">
            <button
              className="btn btn-danger m-2 dropdown-toggle"
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
              <div className="form-group">
                <label>Add Owner Name: </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Add Owner SSN: </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Add Owner Email: </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Add Owner"
                  className="btn btn-primary"
                  onClick={this.handleConfirmClose}
                />

                <input
                  type="submit"
                  value="Cancel"
                  className="btn btn-danger m-2 btn-sm"
                  onClick={this.handleConfirmClose}
                />
              </div>
            </form>
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

              <div className="form-group">
                <input
                  type="submit"
                  value="Remove Owner"
                  className="btn btn-primary"
                  onClick={this.handleRemoveClose}
                />

                <input
                  type="submit"
                  value="Cancel"
                  className="btn btn-danger m-2 btn-sm"
                  onClick={this.handleRemoveClose}
                />
              </div>
            </form>
          </dialog>
        )} */}
          {/* <div className="users bg-primary ">
          <span className="usersText font-italic font-weight-bold">Users</span>
        </div> */}
        </div>
      </body>
    );
  }
}

export default Home;