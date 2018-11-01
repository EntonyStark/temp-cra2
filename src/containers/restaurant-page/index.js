import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { auth, database } from '../../firebaseConfig';

import CurrentUser from '../../components/current-user';
import NewRestaurant from '../../components/newRestaurant';
import Restaurants from '../../components/restaurants';

export default class RestaurantPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      restaurants: null,
    };

    this.restaurantRef = database.ref('/restaurants');
  }

  static propTypes = {
    history: PropTypes.object,
  };

  helper = snapshot => this.setState({ restaurants: snapshot.val() });

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      // we are watching our status in fire base and if he change we set data
      this.setState({ currentUser });
      this.restaurantRef.on('value', this.helper);
    });
  }

  componentWillUnmount() {
    this.restaurantRef.off('value', this.helper);
  }

  render() {
    const { currentUser, restaurants } = this.state;
    const { history } = this.props;

    return (
      <div className="container">
        {currentUser && (
          <Fragment>
            <CurrentUser user={currentUser} history={history} />
            <div className="container__sign-in">
              <NewRestaurant />
              <Restaurants restaurants={restaurants} user={currentUser} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}
