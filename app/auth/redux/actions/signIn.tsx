import {Auth} from 'aws-amplify';
import RootNavigation from '../../../navigation/RootNavigation';
export const AUTH_SIGNIN_SUCCEFULLY = 'AUTH_SIGNIN_SUCEFULLY';
export const AUTH_SIGNIN_REQUEST = 'AUTH_SIGNIN_REQUEST';
export const AUTH_SIGNIN_ERROR = 'AUTH_SIGNIN_ERROR';

export interface SignInPayload {
  username: string;
  password: string;
}

const signIn = (payload: SignInPayload) => async dispatch => {
  dispatch({
    type: AUTH_SIGNIN_REQUEST,
  });

  const {username, password} = payload;
  try {
    const response = await Auth.signIn({username, password});
    dispatch({
      type: AUTH_SIGNIN_SUCCEFULLY,
      payload: response,
    });
    RootNavigation.navigate('HomeApp');
  } catch (error) {
    dispatch({
      type: AUTH_SIGNIN_ERROR,
      payload: error,
    });
  }
};

export default signIn;
