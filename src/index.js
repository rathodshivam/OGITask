import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Landing from './screens/Landing';
import "assets/scss/material-kit-react.scss?v=1.8.0";
import Dashboard from "screens/Dashboard";
import Sidebar from "screens/Sidebar";


var hist = createBrowserHistory();


const isLoggedIn = () => {
  var isAuthenticated = false;
  var token = localStorage.getItem('token');
  if (token) {
    isAuthenticated = true;
  }
  console.log(token);
  return isAuthenticated;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  < Route {...rest} render={(props) => (
    isLoggedIn() === true ? <Component {...props} /> : <Redirect to='/' />)} />
)

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Landing} />
      <PrivateRoute path="/sidebar" exact component={Sidebar} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
