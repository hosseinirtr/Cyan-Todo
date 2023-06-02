import { ADD_TODO } from "../redux/actions/actions";
import apiClient from "./defaultService";

export function addTodo(todo) {
  return function (dispatch) {
    return apiClient.post(`todos`, todo).then((response) => {
      dispatch({ type: ADD_TODO, payload: response.data });
    });
  };
}
