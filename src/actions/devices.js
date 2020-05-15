import axios from "axios";

//Get Devices
export const GET_DEVICES_START = "GET_DEVICES_START";
export const GET_DEVICES_SUCCESS = "GET_DEVICES_SUCCESS";
export const GET_DEVICES_FAIL = "GET_DEVICES_FAIL";

//Add Device
export const ADD_DEVICE_START = "ADD_DEVICE_START";
export const ADD_DEVICE_SUCCESS = "ADD_DEVICE_SUCCESS";
export const ADD_DEVICE_FAIL = "ADD_DEVICE_FAIL";
//Update Device
export const UPDATE_DEVICE_START = "UPDATE_DEVICE_START";
export const UDPATE_DEVICE_SUCCESS = "UPDATE_DEVICE_SUCCESS";
export const UPDATE_DEVICE_FAIL = "UPDATE_DEVICE_FAIL";
//Remove Device
export const REMOVE_DEVICE_START = "REMOVE_DEVICE_START";
export const REMOVE_DEVICE_SUCCESS = "REMOVE_DEVICE_SUCCESS";
export const REMOVE_DEVICE_FAIL = "REMOVE_DEVICE_FAIL";

//Each req is to the staging BE
const devicesURL =
  "http://enterprise-devices-testing.herokuapp.com/api/devices";

export const getDevices = () => (dispatch) => {
  //   console.log("inside getdivices action");
  dispatch({ type: GET_DEVICES_START });
  return axios
    .get(devicesURL)
    .then((res) => {
      console.log(res, "res in getDeivces()");
      dispatch({ type: GET_DEVICES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Error getting devices", err);
    });
};
export const addDevice = (device) => (dispatch) => {
  dispatch({ type: ADD_DEVICE_START });
  return axios
    .post(devicesURL, device)
    .then((res) => {
      dispatch({ type: ADD_DEVICE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Error addding a device,", err);
    });
};
export const updateDevice = (changes) => (dispatch) => {
  dispatch({ type: UPDATE_DEVICE_START });
  return axios
    .put(devicesURL, changes)
    .then((res) => {
      dispatch({ type: UDPATE_DEVICE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Error updating device, ", err);
    });
};
export const removeDevice = (device) => (dispatch) => {
  dispatch({ type: REMOVE_DEVICE_START });
  return axios
    .delete(devicesURL, device)
    .then((res) => {
      dispatch({ type: REMOVE_DEVICE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Error removing device, ", err);
    });
};
