import apiClient from "../../services/defaultService";
import { ADD_COMMENTS, GET_COMMENTS } from "./actions";
import { SET_ERROR } from "./errorActions";

export const getComments = () => (dispatch) => {
  return apiClient
    .get(`comments`)
    .then((response) => {
      dispatch({ type: GET_COMMENTS, payload: response.data });
    })
    .catch((error) => {
      console.error("error", error);
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
    });
};

export function addComments(todo) {
  return function (dispatch) {
    return apiClient
      .post(`comments`, todo)
      .then((response) => {
        const newTodo = response.data;
        dispatch({
          type: ADD_COMMENTS,
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
