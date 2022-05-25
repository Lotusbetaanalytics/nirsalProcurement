import axios from "axios";
import {
  GET_PDO_FAIL,
  GET_PDO_REQUEST,
  GET_PDO_SUCCESS,
} from "../../constants/staff/staffConstansts";

export const getListOfPdo = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PDO_REQUEST,
    });

    const response = await axios.get("/api/v1/staff/projectDeskOfficer", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });

    dispatch({
      type: GET_PDO_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PDO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
