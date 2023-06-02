import { ADD_TODO, GET_TODOS } from "../actions/actions";

const initialState = {};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
export default todoReducer;
