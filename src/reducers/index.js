import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import users from './users';
import messages from './messages';

export default combineReducers({
  //   form: formReducer,
  auth,
  users,
  messages,
});
