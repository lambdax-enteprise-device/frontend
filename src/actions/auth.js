import axios from "axios";
import {axiosWithAuth} from '../components/utils/axiosWithAuth'
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/api/auth/login", creds)
    .then(response => {
    
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    });
};

export const signUp = userInfo => dispatch => {
  console.log("userInfo", userInfo);
  dispatch({ type: SIGNUP_START });
  axiosWithAuth()
    .post("/api/auth/signup", userInfo)
    .then(response => {
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data.user });
      return true;
    })
    .then(()=>{userInfo.history.push('/login')})
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGNUP_FAIL, payload: err.response.data.message });
    });
};
