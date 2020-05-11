import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

//Each post req is to the staging BE

export const login = (creds) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axios
    .post(
      "http://enterprise-devices-testing.herokuapp.com/api/auth/login",
      creds
    )
    .then((response) => {
      console.log(response, "login in action response");
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
      return true;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    });
};

export const signUp = (userInfo) => (dispatch) => {
  dispatch({ type: SIGNUP_START });
  axios
    .post(
      "http://enterprise-devices-testing.herokuapp.com/api/auth/signup",
      userInfo
    )
    .then((response) => {
      console.log(response, "response from auth sign up action");
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data.user });
      return true;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGNUP_FAIL, payload: err.response.data.message });
    });
};

/*

export const signUp = (userInfo) => (dispatch) => {
  console.log("userInfo on auth actions", userInfo);
  dispatch({ type: SIGNUP_START });
  axios
    .post("http://enterprise-devices.herokuapp.com/api/auth/signup", userInfo)
    .then((response) => {
      console.log(response, "response from auth sign up action");
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data.user });
      return true;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGNUP_FAIL, payload: err.response.data.message });
    });
};


*/
