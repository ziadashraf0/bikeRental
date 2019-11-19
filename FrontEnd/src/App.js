import "./App.css";
import React, { Component } from "react";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import information from "./component/OwnerInfo";
import AdminEdit from "./component/AdminEdit";
import AdmminProfile from "./component/adminProfile";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Route from "react-router-dom/Route";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/signup" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/adminProfile" component={AdmminProfile} />
            <Route path="/owner" component={information} />
            <Route path="/edit" component={AdminEdit} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;