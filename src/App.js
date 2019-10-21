import "./App.css";
import React, { Component } from "react";
import Login from "./component/Login";
import Register from "./component/Register";
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
            <Route exact path="/" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
