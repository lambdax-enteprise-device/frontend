import {
  GET_DEVICES_START,
  GET_DEVICES_SUCCESS,
  GET_DEVICES_FAIL,
  GET_DEVICES_BY_COMPANY_START,
  GET_DEVICES_BY_COMPANY_SUCCESS,
  GET_DEVICES_BY_COMPANY_FAIL,
  ADD_DEVICE_START,
  ADD_DEVICE_SUCCESS,
  ADD_DEVICE_FAIL,
  UPDATE_DEVICE_START,
  UDPATE_DEVICE_SUCCESS,
  UPDATE_DEVICE_FAIL,
  REMOVE_DEVICE_START,
  REMOVE_DEVICE_SUCCESS,
  REMOVE_DEVICE_FAIL,
} from "../actions";

const initialState = {
  requests: [],
  devices: [],
  error: "",
  gettingDevices: false,
  gettingDevicesByCompanyId: false,
};

//* WIP: writing reducer parts for unused actions above.

export const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVICES_START:
      return {
        ...state,
        devices: action.payload,
        error: "",
        gettingDevices: true,
      };
    case GET_DEVICES_SUCCESS:
      return {
        ...state,
        devices: action.payload,
        error: "",
        gettingDevices: false,
      };
    case GET_DEVICES_FAIL:
      return {
        ...state,
        error: action.payload,
        gettingDevices: false,
      };
    case GET_DEVICES_BY_COMPANY_START:
      return {
        ...state,
        gettingDevicesByCompanyId: true,
      };
    case GET_DEVICES_BY_COMPANY_SUCCESS:
      return {
        ...state,
        devices: action.payload,
        error: "",
        gettingDevicesByCompanyId: false,
      };
    case GET_DEVICES_BY_COMPANY_FAIL:
      return {
        ...state,
        error: action.payload,
        gettingDevicesByCompanyId: false,
      };
    default:
      return state;
  }
};
