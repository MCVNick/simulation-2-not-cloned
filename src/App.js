import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'
import './reset.css'
import './App.css';

import Header from "./Components/Header/Header"

import routes from './routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <main className='mainContent'>
              {routes}
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
