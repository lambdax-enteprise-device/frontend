import axios from 'axios';
export const VIEW_DEVICES = "VIEW_DEVICES"; // Perhaps group all action types together, but there may be many of them,
                                            // So breaking them up by related reducer might be the way to go.
export const VIEW_REQUESTS = "VIEW_REQUESTS";
//  error action type? 
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SUCCESS = "SUCCESS";

const view_devices = () => dispatch => {
  dispatch({type: VIEW_DEVICES})
  axios.get('http://enterprise-devices.herokuapp.com/api/devices')
       .then(response => {
         dispatch({type: SUCCESS, payload: response.data});
       })
       .catch(err => {
        console.log({error_message: err.message, error: "There was an error returning device information."})
       });
}

const view_requests = () => dispatch => {
  dispatch({type: VIEW_REQUESTS});
  axios.get('http://enterprise-devices.herokuapp.com/api/requests')
       .then(response => {
        dispatch({type: SUCCESS, payload: response.data});
       })
       .catch(err => {
         console.log({error_message: err.message, error: "There was an error viewing requests."})
       })
}

const login = (value) => dispatch => {
  dispatch({type: LOGIN});
  axios.get() // urrrrrl
}