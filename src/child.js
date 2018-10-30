import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import importContext from './utils';

export default class Child extends Component {
  static contextTypes = {
    name: PropTypes.string,
  };

  // static contextType = importContext;

  componentDidMount() {
    console.log('Child1', this.context);
  }

  render() {
    const { name } = this.context;
    return <div className="test-style">Children {name}</div>;
  }
}
