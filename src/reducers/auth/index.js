import * as types from '../../constants/actionTypes';
import initialState from '../initial-state';

export default (state = initialState.auth, { type, payload }) => {
  switch (type) {
    case types.AWAITING_AUTH_RESPONSE: {
      return { ...state, status: 'AWAITING_AUTH_RESPONSE' };
    }
    case types.SIGN_IN: {
      const { uid, photoURL, displayName, email } = payload;
      return {
        ...state,
        uid,
        photoURL,
        displayName,
        email,
        status: 'SIGNED_IN',
      };
    }
    case types.SIGN_OUT: {
      return initialState.auth;
    }
    default:
      return state;
  }
};
