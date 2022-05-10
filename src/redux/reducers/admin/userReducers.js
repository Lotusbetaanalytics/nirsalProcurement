import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_RESET,
  CREATE_USER_SUCCESS,
} from "../../constants/admin/userConstants";

export const createUserReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return { loading: true };
    case CREATE_USER_SUCCESS:
      return { loading: false, success: true };
    case CREATE_USER_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_USER_RESET:
      return {};
    default:
      return state;
  }
};
