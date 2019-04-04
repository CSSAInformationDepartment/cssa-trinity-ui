import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Home from './Pages/Home'

import TopNavBar from './Components/TopNavBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar></TopNavBar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
