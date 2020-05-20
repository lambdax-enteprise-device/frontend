import {
  GET_DEVICES_START,
  GET_DEVICES_SUCCESS,
  GET_DEVICES_FAIL,
} from "../actions";

const initialState = {
  requests: [],
  devices: [],
  error: "",
  gettingDevices: false,
};

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
      };
    default:
      return state;
  }
};
