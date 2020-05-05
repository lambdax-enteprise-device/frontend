import axios from "axios";
import {axiosWithAuth} from '../components/utils/axiosWithAuth'
import createBrowserHistory from '../utils/History'
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const login =  creds => dispatch => {
   const History = createBrowserHistory
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/api/auth/login", creds)
    .then(response => {

     console.log(History)
      dispatch({type:LOGIN_SUCCESS,payload:{'token':response.data.token,'history':History.push("/dashboard",dispatch.type)}})
    return History.push('/dashboard',dispatch.type)
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err.message });
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
