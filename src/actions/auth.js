import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("http://localhost:5555/api/auth/login", creds)
    .then(response => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    });
};

export const signUp = userInfo => dispatch => {
  console.log("userInfo", userInfo);
  dispatch({ type: SIGNUP_START });
  axios
    .post("http://localhost:5555/api/auth/signup", userInfo)
    .then(response => {
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data.user });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGNUP_FAIL, payload: err.response.data.message });
    });
};
