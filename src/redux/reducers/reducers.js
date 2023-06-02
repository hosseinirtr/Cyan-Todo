import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import commentReducer from "./commentReducer";

const reducers = combineReducers({
  todo: todoReducer,
  comment: commentReducer,
  profile: profileReducer,
  error: errorReducer,
});

export default reducers;
