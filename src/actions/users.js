import { ADD_USER } from '../constants/actionTypes';

import { database } from '../firebaseConfig';

const usersRef = database.ref('users');

export const addUser = payload => ({
  type: ADD_USER,
  payload,
});

export const startListeningForUsers = () => dispatch => {
  // listen users in database, if new user start our app we set him in database and our local state
  usersRef.on('child_added', snapshot => {
    dispatch(addUser(snapshot.val()));
  });
};
