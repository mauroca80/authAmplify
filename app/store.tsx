import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

function logger({getState}) {
  return next => action => {
    console.log('will dispatch', action);
    console.log('state before dispatch ', getState());
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
