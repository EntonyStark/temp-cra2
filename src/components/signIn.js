import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../firebaseConfig';

// signInWithPopup - we change our status in firebase
export default class SignIn extends Component {
	render() {
		return (
			<div className="sign-in">
				<h3 className="h3-tag u-margin-bottom-small">Press the button to sign in via google</h3>
				<button onClick={() => auth.signInWithPopup(googleAuthProvider)} className="button button--blue">
					Sign in
				</button>
			</div>
		);
	}
}
