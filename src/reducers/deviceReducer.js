import {
  FETCH_DEVICES_START,
  FETCH_DEVICES_SUCCESS,
  FETCH_DEVICES_FAIL
} from "../actions";

const initialState = {
  requests: [],
  devices: [],
  error: ""
};

export const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEVICES_START:
      return {
        ...state,
        devices: action.payload,
        error: ""
      };
    case FETCH_DEVICES_SUCCESS:
      return {
        ...state,
        requests: action.payload,
        error: ""
      };
    case FETCH_DEVICES_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
