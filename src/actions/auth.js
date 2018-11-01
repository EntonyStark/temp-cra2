import pick from 'lodash/pick';
import * as types from '../constants/actionTypes';

import { auth, googleAuthProvider, database } from '../firebaseConfig';

const usersRef = database.ref('users');

const awaitingAuthResponse = () => ({
	type: types.AWAITING_AUTH_RESPONSE,
});

const signedIn = payload => ({
	type: types.SIGN_IN,
	payload,
});

const signedOut = payload => ({
	type: types.SIGN_OUT,
	payload,
});

export const signIn = () => dispatch => {
	dispatch(awaitingAuthResponse());

	auth.signInWithPopup(googleAuthProvider);
};

export const signOut = () => dispatch => {
	dispatch(awaitingAuthResponse());

	auth.signOut();
};

export const startListeningToAuthChange = () => dispatch => {
	// start listen auth in database
	auth.onAuthStateChanged(user => {
		if (!user) {
			return dispatch(signedOut());
		}
		// if user exist we set him to database
		usersRef.child(user.uid).set(pick(user, ['displayName', 'photoURL', 'email', 'uid']));
		return dispatch(signedIn(user));
	});
};
