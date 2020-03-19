import { LOGIN, FAILURE } from './index'; 

const initialState = {
  loggedInUser: "",
  error: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      //Sets redux to the freshly logged in user's info, groups and allegiances.
      return {
        ...state,
        loggedInUser: action.payload,
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
