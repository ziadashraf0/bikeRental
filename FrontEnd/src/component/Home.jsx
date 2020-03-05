import React, { Component, useState } from "react";
import Dialog from "react-dialog";
import "./Home.css";
import { ownerIDSearch } from "../services/ownerServices";
import { clientIDSearch } from "../services/clientServices";
import List from "react-list-select";
import Select from "react-select";
import { SketchPicker } from "react-color";
import { adminProfile } from "../services/adminServices";

const options = [
  { value: "FatBikes", label: "Fat Bikes" },
  { value: "FitnessBikes", label: "Fitness Bikes" }
];
class Home extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      clientSSN: "",
      ownerSSN: "",
      isConfirmDialogOpen: false,
      isRemoveDialogOpen: false,
      isPromoCodeDialogOpen: false
    };
    this.reqBody = { ownerSSN: "", clientSSN: "" };
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
  home() {
    let path = "/";

    this.props.history.push(path);
  }

  home() {
    let path = "/home";
    this.props.history.push(path);
  }
  searchOwner(result) {
    let path = "/owner";
    this.props.history.push({
      pathname: path,
      state: {
        ownerSSN: this.state.ownerSSN,
        result: result
      }
    });
  }
  searchClient(result) {
    let path = "/client";
    this.props.history.push({
      pathname: path,
      state: {
        ownerSSN: this.state.ownerSSN,
        result: result
      }
    });
  }
  adminInf() {
    this.state.userName = this.props.location.state.userName;
    this.props.history.push({
      pathname: "/adminProfile",
      state: {
        userName: this.state.userName,
        SSN: this.state.SSN,
        email: this.state.email,
        phoneNum: this.state.phoneNum
      }
    });
  }
  async onClick() {
    this.state.ownerSSN = document.getElementById("SSN").value;
    this.state.clientSSN = document.getElementById("SSN").value;

    this.reqBody.ownerSSN = this.state.ownerSSN;
    this.reqBody.clientSSN = this.state.ownerSSN;
    var flag = 0;
    try {
      let result = await ownerIDSearch(this.reqBody);
      this.searchOwner(result);
    } catch (error) {
      if (error.response.status === 400) {
        flag = 1;
      }
    }
    if (flag === 1) {
      try {
        let result = await clientIDSearch(this.reqBody);
        this.searchClient(result);
      } catch (error) {
        if (error.response.status === 400) {
          alert("cannot find client/owner by this SSN");
        }
      }
    }
  }
  // openConfirmDialog = () => this.setState({ isConfirmDialogOpen: true });
  // openRemoveDialog = () => this.setState({ isRemoveDialogOpen: true });
  openPromoCodeDialog = () => this.setState({ isPromoCodeDialogOpen: true });

  // handleConfirmClose = () => this.setState({ isConfirmDialogOpen: false });
  // handleRemoveClose = () => this.setState({ isRemoveDialogOpen: false });
  handlePromoCodeClose = () => this.setState({ isPromoCodeDialogOpen: false });
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
  };
  async componentWillMount() {
    this.reqBody.userName = this.props.location.state.userName;

    try {
      const result = await adminProfile(this.reqBody);

      this.state.userName = result[0].userName;
      this.state.SSN = result[0].SSN;
      this.state.email = result[0].email;
      this.state.phoneNum = result[0].phoneNum;
      console.log(this.state.email);
    } catch (error) {
      if (error.response.status === 404) {
        alert("UserName or Password is Incorrect");
      }
    }
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <body>
        <div className="navbar">
          <a href="" onClick={() => this.home()}>
            Home
          </a>
          <a href="" onClick={this.adminInf.bind(this)}>
            View profile
          </a>
          <a href="" onClick={() => this.edit()}>
            Edit profile
          </a>

          <a href="">Send promocodes</a>
        </div>
        <div className="handle">
          <div>
            <div className="form">
              <input
                className="search text-center"
                type="text"
                id="SSN"
                placeholder="Search by SSN"
                onChange={this.filterList}
              />
              <button
                className="searchButton btn btn-primary  "
                name="searchButton"
                id="searchButton"
                onClick={this.onClick.bind(this)}
              >
                Search
              </button>
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
                  <Select
                    className="text-primary"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                  />
                </div>
                <div className="form-group">
                  <label>Add Bike Color: </label>
                  <SketchPicker
                    color={this.state.background}
                    onChangeComplete={this.handleChangeComplete}
                  />
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
