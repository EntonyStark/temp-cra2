import React, { Component } from 'react';

import { auth } from '../firebaseConfig';
import SignIn from '../components/signIn';
import CurrentUser from '../components/currentUser';

export default class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      // we are watching our status in fire base and if he change we set data
      console.log(currentUser);
      this.setState({ currentUser });
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        {!currentUser && <SignIn />}
        {currentUser && (
          <div className="container__signIn">
            <div>dss</div>
            <CurrentUser user={currentUser} />
          </div>
        )}
      </div>
    );
  }
}
