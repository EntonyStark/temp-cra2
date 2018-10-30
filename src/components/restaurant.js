import React, { Component } from 'react';

export default class Restaurant extends Component {
	render() {
		const { name } = this.props;
		return (
			<article className="restaurant">
				<h3 className="restaurant__name">{name}</h3>
			</article>
		);
	}
}
