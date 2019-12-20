export const VIEW_DEVICES = "VIEW_DEVICES";
export const VIEW_REQUESTS = "VIEW_REQUESTS";

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
    default:
      return state;
  }
};
