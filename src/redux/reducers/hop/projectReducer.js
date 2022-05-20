import {
  GET_SINGLE_PROJECT_FAIL,
  GET_SINGLE_PROJECT_REQUEST,
  GET_SINGLE_PROJECT_RESET,
  GET_SINGLE_PROJECT_SUCCESS,
} from "../../constants/hop/projectConstants";

export const projectReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_PROJECT_REQUEST:
      return { loading: true };
    case GET_SINGLE_PROJECT_SUCCESS:
      return { loading: false, success: true, project: payload.data };
    case GET_SINGLE_PROJECT_FAIL:
      return { loading: false, error: payload };
    case GET_SINGLE_PROJECT_RESET:
      return {};
    default:
      return state;
  }
};
