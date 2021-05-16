import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import publicationsReducer from "./publicactionsReducer";

export default combineReducers({
  usersReducer,
  publicationsReducer,
});
