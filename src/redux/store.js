import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { getComments } from "./actions/commentActions";
import { getProfile } from "./actions/profileActions";
import { getTodos } from "./actions/todoActions";
import rootReducer from "./reducers/reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

// Dispatch an action to load the initial data from the API
store.dispatch(getTodos());
store.dispatch(getProfile());
store.dispatch(getComments());

export default store;
