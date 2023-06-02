import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import errorReducer from "./errorReducer";

const reducers = combineReducers({
  todo: todoReducer,
  error: errorReducer,
});

export default reducers;
