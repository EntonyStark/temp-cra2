import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { auth } from '../firebaseConfig';

export default class CurrentUser extends Component {
	static propTypes = {
		user: PropTypes.object,
	};

	render() {
		const { user } = this.props;
		return (
			<div className="current-user">
				<img src={user.photoURL} alt="photoURL" className="current-user__photo" />
				<div className="current-user__info-box">
					<h3 className="h3-tag u-margin-bottom-small">{user.displayName}</h3>
					<p className="current-user__display-email u-margin-bottom-small">{user.email}</p>
					<button onClick={() => auth.signOut()} type="button" className="button button--blue">
						Sign Out
					</button>
				</div>
			</div>
		);
	}
}
