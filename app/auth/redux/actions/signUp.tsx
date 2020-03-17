import {Auth} from 'aws-amplify';

export const AUTH_SIGN_UP_ERROR = 'AUTH_SIGN_UP_ERROR';
export const AUTH_SIGN_UP_REQUEST = 'AUTH_SIGN_UP_REQUEST';
export const AUTH_SIGN_UP_RESPONSE = 'AUTH_SIGN_RESPONSE';
export const AUTH_SIGN_UP_CLEANING = 'AUTH_SIGN_UP_CLEANING';
export interface SignUpPayload {
  username: string;
  password: string;
}

export default (payload: SignUpPayload) => async dispatch => {
  dispatch({
    type: AUTH_SIGN_UP_REQUEST,
  });

  const {username, password} = payload;

  try {
    const response = await Auth.signUp(username, password);
    dispatch({
      type: AUTH_SIGN_UP_RESPONSE,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: AUTH_SIGN_UP_ERROR,
      payload: error,
    });
  }
};
