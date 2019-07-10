import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import logo from './logo.svg';
import './App.scss';
import Home from './pages/home'

import TopNavBar from './components/topNavBar'


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
