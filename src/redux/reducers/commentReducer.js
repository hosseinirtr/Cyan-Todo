import { ADD_COMMENTS, GET_COMMENTS } from "../actions/actions";

const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
};
export default commentReducer;
