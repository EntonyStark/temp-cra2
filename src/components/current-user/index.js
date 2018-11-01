import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../image/logo.svg';

export default class CurrentUser extends Component {
  static propTypes = {
    user: PropTypes.object,
    history: PropTypes.object,
    signOut: PropTypes.func,
  };

  logOut = () => {
    const { history, signOut } = this.props;
    history.push('/');
    signOut();
  };

  render() {
    const { user } = this.props;

    return (
      <header className="current-user u-margin-bottom-medium">
        <div className="current-user__logo-box">
          <img src={logo} alt="Logo" className="current-user__logo" />
        </div>

        <div className="current-user__info-box">
          <div className="current-user__about-user">
            <h3 className="h4-tag">{user.displayName}</h3>
            <p className="current-user__display-email">{user.email}</p>
          </div>
          <Link to="/profile">
            <img
              src={user.photoURL}
              alt="photoURL"
              className="current-user__photo"
            />
          </Link>
          <button
            onClick={this.logOut}
            type="button"
            className="button button--blue"
          >
            Sign Out
          </button>
        </div>
      </header>
    );
  }
}
