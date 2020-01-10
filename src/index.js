import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Landing from './screens/Landing';
import "assets/scss/material-kit-react.scss?v=1.8.0";
import Dashboard from "screens/Dashboard";
import Sidebar from "screens/Sidebar";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/sidebar" component={Sidebar} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
