import React, { Component } from 'react';
import Proptypes from 'prop-types';
import logo from './logo.svg';

import importContext from './utils';
import Child from './child';

class App extends Component {
  state = {
    name: 'Tony',
  };

  static contextType = importContext;

  static childContextTypes = {
    name: Proptypes.string,
  };

  getChildContext = () => ({
    name: this.state.name,
  });

  componentDidMount() {
    console.log('d', this.context);
  }

  render() {
    const { a, b } = this.context;
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App__link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Child />
          {a + b}
        </header>
      </div>
    );
  }
}

export default App;
