import createBrowserHistory from "../components/utils/History";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_START,
  GET_TOKEN_START,
  GET_TOKEN_SUCCESS,
  GET_DEVICES_START

} from "../actions";
const initialState = {
  isLoggingIn: false,
  error: null,
  user: { token: '', email: '' },
  messageFromServer: '',
  isResetPassword: false,
  showError: false,
  showNullError: false,
  history: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      //Sets redux to the freshly logged in user's info.
      return {
        ...state,
        isLoggingIn: true,
        error: null,
        user: { token: '', email: '' },
        history: []
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
        user: { token: "", email: "" },
        error: action.payload,
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
    case RESET_PASSWORD_START:
      return {
        ...state,
        isResetPassword: true,
        showNullError: true,
        user: { token: '', email: '' },
        showError: false
      }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isResetPassword: false,
        showNullError: false,
        messageFromServer: action.payload,
        showError: false
      }

    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        isResetPassword: false,
        showError: true,
        showNullError: true,
        user: {},
        error: action.payload
      }
    case GET_DEVICES_START:
      return {
        ...state,
        showError: false,
        token: {}
      }
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        showError: false,
        token: state.user.token
      }

    default:
      return state;
  }
};
