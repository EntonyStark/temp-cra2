import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import logo from '../../image/logo.svg';
import { ALLOWED_LANGUAGES } from '../../utils/language';

class Header extends Component {
	static propTypes = {
		user: PropTypes.object,
		history: PropTypes.object,
		literals: PropTypes.object,
		signOut: PropTypes.func,
		setLang: PropTypes.func,
	};

	logOut = () => {
		const { history, signOut } = this.props;
		history.push('/');
		signOut();
	};

	render() {
		const { user, setLang, literals } = this.props;
		return (
			<header className="current-user u-margin-bottom-medium">
				<div className="current-user__logo-box">
					<img src={logo} alt="Logo" className="current-user__logo" />
				</div>
				<div>
					<p>{literals.greetings}</p>
					<select name="language" id="lang" onChange={e => setLang({ lang: e.target.value, user })}>
						{ALLOWED_LANGUAGES.map(el => (
							<option key={el} value={el}>
								{el}
							</option>
						))}
					</select>
				</div>
				<div className="current-user__info-box">
					<div className="current-user__about-user">
						<h3 className="h4-tag">{user.displayName}</h3>
						<p className="current-user__display-email">{user.email}</p>
					</div>
					<Link to="/profile">
						<img src={user.photoURL} alt="photoURL" className="current-user__photo" />
					</Link>
					<button onClick={this.logOut} type="button" className="button button--blue">
						Sign Out
					</button>
				</div>
			</header>
		);
	}
}

export default withRouter(Header);
