import React, { Component } from 'react';
import { database } from '../firebaseConfig';

export default class NewRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.restaurantRef = database.ref('/restaurants');
  }

  handleSubmit = event => {
    event.preventDefault();

    const { name } = this.state;

    this.restaurantRef.push({ name });

    this.setState({ name: '' });
  };

  handleChange = event => this.setState({ name: event.target.value });

  render() {
    const { name } = this.state;
    return (
      <form className="new-restaurant">
        <input
          placeholder="Add new restaurant"
          className="new-restaurant__input"
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        <button
          className="button button--white"
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </button>
      </form>
    );
  }
}
