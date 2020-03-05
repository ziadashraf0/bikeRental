import "./App.css";
import React, { Component } from "react";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import OwnerInfo from "./component/OwnerInfo";
import AdminEdit from "./component/AdminEdit";
import AdmminProfile from "./component/adminProfile";
import ClientInfo from "./component/ClientInfo";
import ContactUs from "./component/ContactUs";

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Route from "react-router-dom/Route";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />
            <Route path="/adminProfile" component={AdmminProfile} />
            <Route path="/owner" component={OwnerInfo} />
            <Route path="/contactus" component={ContactUs} />

            <Route path="/client" component={ClientInfo} />
            <Route path="/edit" component={AdminEdit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
