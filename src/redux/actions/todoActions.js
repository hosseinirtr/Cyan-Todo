import apiClient from "../../services/defaultService";
import { ADD_TODO, GET_TODOS, UPDATE_TODO } from "./actions";
import { SET_ERROR } from "./errorActions";

export const getTodos = () => (dispatch) => {
  return apiClient
    .get(`todos`)
    .then((response) => {
      dispatch({ type: GET_TODOS, payload: response.data });
    })
    .catch((error) => {
      console.error("error", error);
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
    });
};

export function toggleTodo(id) {
  return function (dispatch, getState) {
    const { todo } = getState();
    const { todos } = todo;
    const index = todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      const updatedTodo = {
        ...todos[index],
        completed: !todos[index].completed,
      };
      return apiClient
        .put(`todos/${id}`, updatedTodo)
        .then((response) => {
          dispatch({
            type: UPDATE_TODO,
            payload: updatedTodo,
          });
        })
        .catch((error) => {
          console.error("error", error);
          dispatch({
            type: SET_ERROR,
            payload: error,
          });
        });
    }
  };
}

export function addTodo(todo) {
  return function (dispatch, getState) {
    return apiClient
      .post(`todos`, todo)
      .then((response) => {
        const newTodo = response.data;
        dispatch({
          type: ADD_TODO,
          payload: newTodo,
        });
      })
      .catch((error) => {
        console.error("error", error);
        dispatch({
          type: SET_ERROR,
          payload: error,
        });
      });
  };
}
export function deleteTodo(todoId) {
  return function (dispatch, getState) {
    return apiClient
      .delete(`todos/${todoId}`)
      .then((response) => {
        dispatch({
          type: 'DELETE_TODO',
          payload: todoId,
        });
      })
      .catch((error) => {
        console.error("error", error);
        dispatch({
          type: SET_ERROR,
          payload: error,
        });
      });
  };
}