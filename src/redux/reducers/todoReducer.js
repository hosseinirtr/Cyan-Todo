import { ADD_TODO, GET_TODOS, UPDATE_TODO, DELETE_TODO } from "../actions/actions";

const initialState = {
  todos: [],
};

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
    case UPDATE_TODO:
      const updatedTodo = action.payload;
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    case DELETE_TODO:
      const todoId = action.payload;
      const filteredTodos = state.todos.filter((todo) => todo.id !== todoId);
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;