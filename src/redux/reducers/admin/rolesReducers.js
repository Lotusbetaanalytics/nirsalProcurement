import {
  CREATE_ROLES_FAIL,
  CREATE_ROLES_REQUEST,
  CREATE_ROLES_RESET,
  CREATE_ROLES_SUCCESS,
  GET_ROLES_FAIL,
  GET_ROLES_REQUEST,
  GET_ROLES_SUCCESS,
  UPDATE_ROLES_FAIL,
  UPDATE_ROLES_REQUEST,
  UPDATE_ROLES_RESET,
  UPDATE_ROLES_SUCCESS,
  DELETE_ROLES_FAIL,
  DELETE_ROLES_REQUEST,
  DELETE_ROLES_RESET,
  DELETE_ROLES_SUCCESS,
} from "../../constants/admin/rolesConstants";

export const createRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ROLES_REQUEST:
      return { loading: true };
    case CREATE_ROLES_SUCCESS:
      return { loading: false, success: true };
    case CREATE_ROLES_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_ROLES_RESET:
      return {};
    default:
      return state;
  }
};

export const getRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ROLES_REQUEST:
      return { loading: true };
    case GET_ROLES_SUCCESS:
      return { loading: false, success: true, roles: action.payload.data };
    case GET_ROLES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ROLES_REQUEST:
      return { loading: true };
    case UPDATE_ROLES_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_ROLES_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_ROLES_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ROLES_REQUEST:
      return { loading: true };
    case DELETE_ROLES_SUCCESS:
      return { loading: false, success: true };
    case DELETE_ROLES_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_ROLES_RESET:
      return {};
    default:
      return state;
  }
};
