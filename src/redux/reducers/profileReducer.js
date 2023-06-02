import { GET_PROFILE, SET_PROFILE } from "../actions/actions";

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
