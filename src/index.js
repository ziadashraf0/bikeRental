import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD
import Login from "./component/Login";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(<Login />, document.getElementById("root"));
=======
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Register />, document.getElementById("root"));
>>>>>>> 5dbe5df4bfaea0cb9206892bd785b2c3dc4dd040

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
