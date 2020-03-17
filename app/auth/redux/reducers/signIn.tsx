import {
  AUTH_SIGNIN_SUCCEFULLY,
  AUTH_SIGNIN_REQUEST,
  AUTH_SIGNIN_ERROR,
} from '../actions/signIn';

const defaultState = {
  loading: null,
  error: false,
  auth: null,
};
interface actionPayload {
  type: string;
  payload: any;
}

export default (state = defaultState, action: actionPayload) => {
  switch (action.type) {
    case AUTH_SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AUTH_SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SIGNIN_SUCCEFULLY:
      return {
        loading: false,
        error: null,
        auth: action.payload,
      };

    default:
      return state;
  }
};
