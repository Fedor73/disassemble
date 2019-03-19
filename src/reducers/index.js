import { combineReducers } from "redux";
import persons from "./persons";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    persons,
    user: userReducer
});

export default rootReducer;
