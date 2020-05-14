import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../actions";
const initialState = {
  isLoggingIn: false,
  error: null,
  user: {},
  loginSuccess: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      //Sets redux to the freshly logged in user's info.
      return {
        ...state,
        isLoggingIn: true,
        error: null,
        user: {},
        loginSuccess: false,
      };
    case LOGIN_SUCCESS:
      return {
        isLoggingIn: false,
        user: action.payload,
        error: null,
        loginSuccess: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        user: {},
        error: action.payload,
        loginSuccess: false,
      };
    case SIGNUP_START:
      return {
        ...state,
        isLoggingIn: true,
        error: null,
        user: {},
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        error: null,
        user: action.payload,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
        user: {},
      };
    default:
      return state;
  }
};
