import {
  CREATE_NEWPROJECTLIST_REQUEST,
  CREATE_NEWPROJECTLIST_SUCCESS,
  CREATE_NEWPROJECTLIST_FAIL,
  CREATE_NEWPROJECTLIST_RESET,
} from "../../constants/HopConstant/hopConstant";

export const postProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NEWPROJECTLIST_REQUEST:
      return { loading: true };
    case CREATE_NEWPROJECTLIST_SUCCESS:
      return { loading: false, success: true, user: action.payload.data };
    case CREATE_NEWPROJECTLIST_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_NEWPROJECTLIST_RESET:
      return {};
    default:
      return state;
  }
};
