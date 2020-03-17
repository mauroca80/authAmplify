import {
  AUTH_SIGN_UP_ERROR,
  AUTH_SIGN_UP_REQUEST,
  AUTH_SIGN_UP_RESPONSE,
} from '../actions/signUp';

const defaultState = {
  loading: false,
  error: false,
  sigUpResponse: null,
};
interface actionPayload {
  type: string;
  payload: any;
}

export default (state = defaultState, action: actionPayload) => {
  switch (action.type) {
    case AUTH_SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case AUTH_SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_SIGN_UP_RESPONSE:
      return {
        ...state,
        loading: false,
        SigUpResponse: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
