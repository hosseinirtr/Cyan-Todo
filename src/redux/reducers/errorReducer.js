import { SET_ERROR } from "../actions/errorActions";
const initialState = {};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default errorReducer;
