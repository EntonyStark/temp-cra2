import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../firebaseConfig';

// signInWithPopup - we change our status in firebase
export default class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <button
          onClick={() => auth.signInWithPopup(googleAuthProvider)}
          className="sign-in__button"
        >
          Sign in
        </button>
      </div>
    );
  }
}
