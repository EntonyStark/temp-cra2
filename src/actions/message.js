import * as types from '../constants/actionTypes';

import { database } from '../firebaseConfig';

const messageRef = database.ref('messages');

const addMessage = payload => ({
  type: types.ADD_MESSAGE,
  payload,
});

const removeMessage = payload => ({
  type: types.REMOVE_MESSAGE,
  payload,
});

export const createMessage = ({ message, uid }) => dispatch => {
  console.log('message', message);
  const newMessage = {
    content: message,
    uid,
    timeStamp: Date.now(),
  };
  console.log('newMessage', newMessage);
  messageRef.push(newMessage);

  dispatch(addMessage(message));
};

export const destroyMessage = key => dispatch => {
  messageRef
    .child(key)
    .remove()
    .then(() => dispatch(removeMessage(key)));
};

export const startListeningForMessages = () => dispatch => {
  messageRef.on('child_added', snapshot => {
    const { key } = snapshot;
    dispatch(addMessage({ key, val: snapshot.val() }));
  });

  messageRef.on('child_removed', snapshot => {
    const { key } = snapshot;
    dispatch(removeMessage({ key }));
  });
};
