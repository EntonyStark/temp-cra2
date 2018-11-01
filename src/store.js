import { createStore, applyMiddleware, compose } from 'redux';
import { enableBatching, batchDispatchMiddleware } from 'redux-batched-actions';
import thunk from 'redux-thunk';

// import logger from 'redux-logger';
import { startListeningToAuthChange } from './actions/auth';
import { startListeningForUsers } from './actions/users';
import initialState from './reducers/initial-state';
import reducers from './reducers';

const middleware = [thunk, batchDispatchMiddleware];

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  enableBatching(reducers),
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

store.dispatch(startListeningToAuthChange()); // listener for auth
store.dispatch(startListeningForUsers()); // listener for users

export default store;
