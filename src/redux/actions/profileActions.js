import apiClient from "../../services/defaultService";
import { GET_PROFILE, SET_PROFILE } from "./actions";
import { SET_ERROR } from "./errorActions";

export const getProfile = () => (dispatch) => {
  return apiClient
    .get(`profile`)
    .then((response) => {
      dispatch({ type: GET_PROFILE, payload: response.data });
    })
    .catch((error) => {
      console.error("error", error);
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
    });
};

export const updateProfile = (data) => (dispatch) => {
  return apiClient
    .post(`profile`, data)
    .then((response) => {
      dispatch({ type: SET_PROFILE, payload: response.data });
    })
    .catch((error) => {
      console.error("error", error);
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
    });
};
