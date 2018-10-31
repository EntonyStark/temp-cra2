import React, { Component } from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import isNativeObject from '../utils/isNativeObject';

export default class Restaurant extends Component {
  static defaultProps = {
    handleSelect: PropTypes.func,
    handleDeselect: PropTypes.func,
    name: PropTypes.string,
    votes: PropTypes.object,
    user: PropTypes.object,
  };

  render() {
    const { name, votes, handleSelect, handleDeselect, user } = this.props;
    const userHasSelected =
      isNativeObject(votes) && Object.keys(votes).some(el => el === user.uid);

    return (
      <article className="restaurant u-margin-bottom-small">
        <h3 className="restaurant__name u-margin-bottom-small">{name}</h3>

        {isNativeObject(votes) && (
          <ul className="restaurant__list u-margin-bottom-small">
            {map(votes, (vote, key) => (
              <li className="restaurant__item" key={key}>
                {vote}
              </li>
            ))}
          </ul>
        )}

        {userHasSelected ? (
          <button
            className="button button--red"
            type="button"
            onClick={handleDeselect}
          >
            Hah, nevermind
          </button>
        ) : (
          <button
            className="button button--green"
            type="button"
            onClick={handleSelect}
          >
            Yea, I`d do there
          </button>
        )}
      </article>
    );
  }
}
