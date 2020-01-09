import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Login from './screens/Login';
import Dashboard from './screens/Dashboard'
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Landing from './screens/Landing';
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>


      {/* <Route path="/home" exact component={Home} /> */}
      <Route path="/login"  component={Login} />
      <Route path="/dashboard"  component={Dashboard} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Landing} />
      <Route path= "dashboard" component={Dashboard} />
      {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} /> */}
      {/* <Route path="/" component={Components} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
