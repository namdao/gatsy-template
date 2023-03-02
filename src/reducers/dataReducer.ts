import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "scenes/auth/redux/slice";

export default combineReducers({
  auth: authReducer,
});
