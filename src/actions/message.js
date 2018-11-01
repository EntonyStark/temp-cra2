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

export const createMessage = message => dispatch => {
  const newMessage = {
    content: message.content,
    uid: message.uid,
    timeStamp: Date.now(),
  };
  messageRef.push(newMessage);

  // dispatch(addMessage(message));
};

export const destroyMessage = key => dispatch => {
  messageRef
    .child(key)
    .remove()
    .then(() => dispatch(removeMessage(key)));
};
