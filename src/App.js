import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import './reset.css'
import './App.css';

import Header from "./Components/Header/Header"

import routes from './routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
