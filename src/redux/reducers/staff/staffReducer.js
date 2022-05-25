import {
  GET_PDO_FAIL,
  GET_PDO_REQUEST,
  GET_PDO_SUCCESS,
} from "../../constants/staff/staffConstansts";

export const getPdoListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_PDO_REQUEST:
      return { loading: true };
    case GET_PDO_SUCCESS:
      return { loading: false, data: payload, success: true };
    case GET_PDO_FAIL:
      return { loading: false, error: payload, success: false };
    default:
      return state;
  }
};
