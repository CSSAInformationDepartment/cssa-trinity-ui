import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

import TopNavBar from './Components/TopNavBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar></TopNavBar>
      </div>
    );
  }
}

export default App;
