import axios from "axios";
import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
} from "../../constants/admin/userConstants";

export const addUser = (email) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_USER_REQUEST });

    // const {
    //   adminLogin: { adminInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        // Authorization: `Bearer ${adminInfo.jwtToken}`,
      },
    };
    const { data } = await axios.post(`/api/v1/staff`, { email }, config);
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
