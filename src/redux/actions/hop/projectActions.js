import axios from "axios";
import {
  GET_SINGLE_PROJECT_FAIL,
  GET_SINGLE_PROJECT_REQUEST,
  GET_SINGLE_PROJECT_SUCCESS,
} from "../../constants/hop/projectConstants";

export const getSingleProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PROJECT_REQUEST });
    const { data } = await axios.get(`/api/v1/projectInitiation/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    dispatch({
      type: GET_SINGLE_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
