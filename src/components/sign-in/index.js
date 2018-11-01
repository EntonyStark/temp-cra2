import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import pick from 'lodash/pick';

import { database, auth, googleAuthProvider } from '../../firebaseConfig';

// signInWithPopup - we change our status in firebase
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      users: null,
    };

    this.usersRef = null;
    this.userRef = null;
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        this.setState(() => ({ currentUser }));
        this.usersRef = database.ref('/users');

        this.userRef = this.usersRef.child(currentUser.uid);

        this.userRef.once('value').then(snapshot => {
          const user = pick(snapshot.val(), [
            'displayName',
            'photoURL',
            'email',
          ]);
          this.userRef.set(user);
        });

        this.usersRef.on('value', snapshot => {
          this.setState(() => ({ users: snapshot.val() }));
        });
      }
    });
  }

  render() {
    const { currentUser, users } = this.state;
    console.log('state', this.state);

    if (currentUser && users) {
      return <Redirect to="/res" />;
    }

    return (
      <div className="sign-in">
        <h3 className="h3-tag u-margin-bottom-small">
          Press the button to sign in via google
        </h3>
        <button
          onClick={() => auth.signInWithPopup(googleAuthProvider)}
          className="button button--blue"
        >
          Sign in
        </button>
      </div>
    );
  }
}
