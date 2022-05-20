import {
  CREATE_SUBUNIT_FAIL,
  CREATE_SUBUNIT_REQUEST,
  CREATE_SUBUNIT_RESET,
  CREATE_SUBUNIT_SUCCESS,
  GET_SUBUNIT_FAIL,
  GET_SUBUNIT_REQUEST,
  GET_SUBUNIT_SUCCESS,
  UPDATE_SUBUNIT_FAIL,
  UPDATE_SUBUNIT_REQUEST,
  UPDATE_SUBUNIT_RESET,
  UPDATE_SUBUNIT_SUCCESS,
  DELETE_SUBUNIT_FAIL,
  DELETE_SUBUNIT_REQUEST,
  DELETE_SUBUNIT_RESET,
  DELETE_SUBUNIT_SUCCESS,
} from "../../constants/admin/subunitConstants";

export const createSubunitReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SUBUNIT_REQUEST:
      return { loading: true };
    case CREATE_SUBUNIT_SUCCESS:
      return { loading: false, success: true };
    case CREATE_SUBUNIT_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_SUBUNIT_RESET:
      return {};
    default:
      return state;
  }
};

export const getSubunitReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SUBUNIT_REQUEST:
      return { loading: true };
    case GET_SUBUNIT_SUCCESS:
      return { loading: false, success: true, subunits: action.payload.data };
    case GET_SUBUNIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateSubunitReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SUBUNIT_REQUEST:
      return { loading: true };
    case UPDATE_SUBUNIT_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_SUBUNIT_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_SUBUNIT_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteSubunitReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SUBUNIT_REQUEST:
      return { loading: true };
    case DELETE_SUBUNIT_SUCCESS:
      return { loading: false, success: true };
    case DELETE_SUBUNIT_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_SUBUNIT_RESET:
      return {};
    default:
      return state;
  }
};
