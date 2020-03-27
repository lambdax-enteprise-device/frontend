import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { deviceReducer } from "./deviceReducer";

const rootReducer = combineReducers({ authReducer, deviceReducer });

export default rootReducer;
