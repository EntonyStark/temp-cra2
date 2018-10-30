import React, { Component } from 'react';
import map from 'lodash/map';

import Restaurant from './restaurant';

export default class Restaurants extends Component {
	render() {
		const { restaurants } = this.props;

		const restaurantsList = map(restaurants, (restaurant, key) => <Restaurant key={key} {...restaurant} />);

		return <section className="restaurants">{restaurantsList}</section>;
	}
}
