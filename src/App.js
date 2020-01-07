import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Home from './screens/Home'


class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
		    <Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/signup" exact component={SignUp} />

				</Switch>
		    </Router>
      );
  }
}
export default App;
