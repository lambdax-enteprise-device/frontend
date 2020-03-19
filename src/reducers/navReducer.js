import { VIEW_DEVICES, VIEW_REQUESTS, FAILURE} from './index';

const initialState = {
  requests: [],
  devices: [],
  error: ""
};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_DEVICES:
      return {
        ...state,
        devices: action.payload,
        error: ""
      };
    case VIEW_REQUESTS:
      return {
        ...state,
        requests: action.payload,
        error: ""
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
