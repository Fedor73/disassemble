import { combineReducers } from "redux";
import country from "./country";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  country,
  user: userReducer
});

export default rootReducer;
