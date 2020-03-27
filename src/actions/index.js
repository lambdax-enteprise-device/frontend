import axios from "axios";

export * from "./auth.js";

export const FETCH_DEVICES_START = "FETCH_DEVICES_START";
export const FETCH_DEVICES_SUCCESS = "FETCH_DEVICES_SUCCESS";
export const FETCH_DEVICES_FAIL = "FETCH_DEVICES_FAIL";

// Perhaps group all action types together, but there may be many of them,
// So breaking them up by related reducer might be the way to go.
export const VIEW_REQUESTS_START = "VIEW_REQUESTS_START";
export const VIEW_REQUESTS_SUCCESS = "VIEW_REQUESTS_SUCCESS";
export const VIEW_REQUESTS_FAIL = "VIEW_REQUESTS_FAIL";

export const SUBMIT_REQUESTS_START = "SUBMIT_REQUESTS_START";
export const SUBMIT_REQUESTS_SUCCESS = "SUBMIT_REQUESTS_SUCCESS";
export const SUBMIT_REQUESTS_FAIL = "SUBMIT_REQUESTS_FAIL";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const getDevices = () => dispatch => {
  dispatch({ type: FETCH_DEVICES_START });
  axios
    .get("http://enterprise-devices.herokuapp.com/api/devices")
    .then(response => {
      dispatch({ type: FETCH_DEVICES_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log({
        error_message: err.message,
        error: "There was an error returning device information."
      });
      dispatch({ type: FETCH_DEVICES_FAIL, error: err.message });
    });
};

// export const view_requests = () => dispatch => {
//   dispatch({ type: VIEW_REQUESTS });
//   axios
//     .get("http://enterprise-devices.herokuapp.com/api/requests")
//     .then(response => {
//       dispatch({ type: SUCCESS, payload: response.data });
//     })
//     .catch(err => {
//       console.log({
//         error_message: err.message,
//         error: "There was an error viewing requests."
//       });
//     });
// };
