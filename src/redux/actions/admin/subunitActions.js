import axios from "axios";
import {
  GET_SUBUNIT_FAIL,
  GET_SUBUNIT_REQUEST,
  GET_SUBUNIT_SUCCESS,
  CREATE_SUBUNIT_FAIL,
  CREATE_SUBUNIT_REQUEST,
  CREATE_SUBUNIT_SUCCESS,
  UPDATE_SUBUNIT_FAIL,
  UPDATE_SUBUNIT_REQUEST,
  UPDATE_SUBUNIT_SUCCESS,
  DELETE_SUBUNIT_FAIL,
  DELETE_SUBUNIT_REQUEST,
  DELETE_SUBUNIT_SUCCESS,
} from "../../constants/admin/subunitConstants";
import { BASE_URL } from "../../config";

export const addSubunit =
  (title, email, head) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_SUBUNIT_REQUEST });

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
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/team`,
        { title, email, head },
        config
      );
      dispatch({
        type: CREATE_SUBUNIT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_SUBUNIT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const fetchSubunit = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_SUBUNIT_REQUEST });

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
    const { data } = await axios.get(`${BASE_URL}/api/v1/team`, config);
    dispatch({
      type: GET_SUBUNIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SUBUNIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const patchSubunit = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_SUBUNIT_REQUEST });

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
    const { data } = await axios.patch(
      `${BASE_URL}/api/v1/team/${id}`,
      {},
      config
    );
    dispatch({
      type: UPDATE_SUBUNIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SUBUNIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeSubunit = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_SUBUNIT_REQUEST });

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
    const { data } = await axios.delete(
      `${BASE_URL}/api/v1/team/${id}`,
      config
    );
    dispatch({
      type: DELETE_SUBUNIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SUBUNIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
