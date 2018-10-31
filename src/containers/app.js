import React, { Component } from 'react';

import { auth, database } from '../firebaseConfig';
import SignIn from '../components/signIn';
import CurrentUser from '../components/currentUser';
import NewRestaurant from '../components/newRestaurant';
import Restaurants from '../components/restaurants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      restaurants: null,
    };

    this.restaurantRef = database.ref('/restaurants');
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      // we are watching our status in fire base and if he change we set data
      this.setState({ currentUser });

      this.restaurantRef.on('value', snapshot => {
        this.setState({ restaurants: snapshot.val() });
      });
    });
  }

  render() {
    const { currentUser, restaurants } = this.state;

    return (
      <div className="container">
        {!currentUser && <SignIn />}
        {currentUser && (
          <div className="container__sign-in">
            <NewRestaurant />
            <Restaurants restaurants={restaurants} user={currentUser} />
            <CurrentUser user={currentUser} />
          </div>
        )}
      </div>
    );
  }
}
