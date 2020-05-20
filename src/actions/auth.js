import axios from "axios";
import { axiosWithAuth } from "../components/utils/axiosWithAuth";
import createBrowserHistory from "../components/utils/History";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const RESET_PASSWORD_START = "RESET_PASSWORD_START";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL"

//Each post req is to the staging BE
const loginURL =
  "http://enterprise-devices-testing.herokuapp.com/api/auth/login";
const signUpURL =
  "http://enterprise-devices-testing.herokuapp.com/api/auth/signup";

export const login = (creds) => (dispatch) => {
  dispatch({ type: LOGIN_START });

  axiosWithAuth()
    .post("/api/auth/login", creds)
    .then(response => {
    dispatch({type:LOGIN_SUCCESS,payload:{'token':response.data.token}})
    return window.location.replace("/dashboard")

    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL, payload: err.message });
    });
};

export const signUp = (userInfo) => (dispatch) => {
  dispatch({ type: SIGNUP_START });

  axiosWithAuth()
    .post("/api/auth/signup", userInfo)
    .then(response => {
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data});
      return window.location.replace("/dashboard");

    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGNUP_FAIL, payload: err.message });
    });
};


export const resetPass = (email) => (dispatch) => {
  dispatch({type: RESET_PASSWORD_START})
  axiosWithAuth()
        .get('/api/auth/password/forgotpassword',email)
        .then(response =>{
          dispatch({type: RESET_PASSWORD_SUCCESS,payload:response.data})

        })
        .catch((err) => {
          console.log(err)
          dispatch({type:RESET_PASSWORD_FAIL ,payload:err.message})
        })
}

