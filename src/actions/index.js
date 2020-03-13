import axios from 'axios';
export const VIEW_DEVICES = "VIEW_DEVICES";
export const VIEW_REQUESTS = "VIEW_REQUESTS";
//  error? 
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const view_devices = () => dispatch => {
  dispatch({type: VIEW_DEVICES});
  axios.get('http://enterprise-devices.herokuapp.com/api/devices')
       .then()
       .catch((err) => {
        console.log({error_message: err.message, error: "There was an error returning device information."})
       })
}