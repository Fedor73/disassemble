import { combineReducers } from "redux";
import { countriReducer } from "./countri";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  countri: countriReducer,
  user: userReducer
});
