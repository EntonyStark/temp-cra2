import React, { Component } from 'react';
import Proptypes from 'prop-types';

import { database } from './firebaseConfig';
import logo from './logo.svg';

import importContext from './utils';
import Child from './child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tony',
      data: null,
      newData: '',
    };

    this.dataRef = null;
  }

  static contextType = importContext;

  static childContextTypes = {
    name: Proptypes.string,
  };

  getChildContext = () => ({
    name: this.state.name,
  });

  componentDidMount() {
    this.dataRef = database.ref('/new/new');

    // subscribe for firebase
    // database
    //   .ref()
    //   .on('value', snapshot => this.setState({ data: snapshot.val() }));

    this.dataRef.on('value', snapshot => {
      console.log('snapshot', snapshot);
      this.setState({ data: snapshot.val() });
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.dataRef.push(this.state.newData);

    // database
    //   .ref()
    //   .child('AMAZINGNEWDATE')
    //   .push(this.state.newData); // create value and generate random key for this, always new!
    // // .set(this.state.newData);  // create value in CHILD key, and always replays value
  };

  handleChange = event => this.setState({ newData: event.target.value });

  render() {
    // const { a, b } = this.context;
    const { data, newData } = this.state;
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
          <pre className="App_pre">{JSON.stringify(data, null, 2)}</pre>
        </header>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newData} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
