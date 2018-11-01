import * as types from '../../constants/actionTypes';
import initialState from '../initial-state';

export default (state = initialState.messages, { type, payload }) => {
  switch (type) {
    case types.ADD_MESSAGE: {
      console.log('ADD_MESSAGE', payload);
      return state;
    }
    case types.REMOVE_MESSAGE: {
      console.log('REMOVE_MESSAGE', payload);
      return state;
    }
    default:
      return state;
  }
};
