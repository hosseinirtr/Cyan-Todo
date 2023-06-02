import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
  todo: todoReducer,
  profile: profileReducer,
  error: errorReducer,
});

export default reducers;
