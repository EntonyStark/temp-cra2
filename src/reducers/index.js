import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import i18nReducer from './language';
import auth from './auth';
import users from './users';
import messages from './messages';

export default combineReducers({
	//   form: formReducer,
	i18nReducer,
	auth,
	users,
	messages,
});
