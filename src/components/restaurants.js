import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import { database } from '../firebaseConfig';
import Restaurant from './restaurant';

export default class Restaurants extends Component {
  static defaultProps = {
    user: PropTypes.object,
    restaurants: PropTypes.object,
  };

  handleSelect = key => {
    const { user } = this.props;

    database
      .ref('/restaurants')
      .child(key)
      .child('votes')
      .child(user.uid)
      .set(user.displayName);
  };

  handleDeselect = key => {
    const { user } = this.props;

    database
      .ref('/restaurants')
      .child(key)
      .child('votes')
      .child(user.uid)
      .remove();
  };

  render() {
    const { restaurants, user } = this.props;

    const restaurantsList = map(restaurants, (restaurant, key) => (
      <Restaurant
        key={key}
        user={user}
        handleSelect={() => this.handleSelect(key)}
        handleDeselect={() => this.handleDeselect(key)}
        {...restaurant}
      />
    ));

    return <section className="restaurants">{restaurantsList}</section>;
  }
}
