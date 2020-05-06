import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

const loginUrl = process.env.REACT_APP_LOGIN_URL;
const signupUrl = process.env.REACT_APP_SIGNUP_URL;

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(loginUrl, creds)
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
    .post(signupUrl, userInfo)
    .then((response) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data.user });
      return true;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGNUP_FAIL, payload: err.response.data.message });
    });
};
