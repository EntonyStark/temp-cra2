import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import logger from 'redux-logger';
import { startListeningToAuthChange } from './actions/auth';
import { startListeningForUsers } from './actions/users';
import { startListeningForLang } from './actions/language';
import initialState from './reducers/initial-state';
import reducers from './reducers';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

store.dispatch(startListeningToAuthChange()); // listener for auth
store.dispatch(startListeningForUsers()); // listener for users
store.dispatch(startListeningForLang()); // listener for lang

export default store;
