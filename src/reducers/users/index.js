import * as types from '../../constants/actionTypes';
import initialState from '../initial-state';

export default (state = initialState.users, { type, payload }) => {
  switch (type) {
    case types.ADD_USER: {
      const { uid, photoURL, displayName, email } = payload;

      return {
        ...state,
        [uid]: {
          photoURL,
          displayName,
          email,
        },
      };
    }
    default:
      return state;
  }
};
