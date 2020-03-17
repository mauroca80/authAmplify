import signUp from './auth/redux/reducers/signUp';
import signIn from './auth/redux/reducers/signIn';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  signUp,
  signIn,
});

export default reducers;
