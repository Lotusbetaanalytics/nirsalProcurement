import axios from "axios";
import {
  GET_ROLES_FAIL,
  GET_ROLES_REQUEST,
  GET_ROLES_SUCCESS,
  CREATE_ROLES_FAIL,
  CREATE_ROLES_REQUEST,
  CREATE_ROLES_SUCCESS,
  UPDATE_ROLES_FAIL,
  UPDATE_ROLES_REQUEST,
  UPDATE_ROLES_SUCCESS,
  DELETE_ROLES_FAIL,
  DELETE_ROLES_REQUEST,
  DELETE_ROLES_SUCCESS,
} from "../../constants/admin/rolesConstants";
import { BASE_URL } from "../../config";

export const addRole = (title) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ROLES_REQUEST });

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
      `${BASE_URL}/api/v1/role`,
      { title },
      config
    );
    dispatch({
      type: CREATE_ROLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ROLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchRoles = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ROLES_REQUEST });

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
    const { data } = await axios.get(`${BASE_URL}/api/v1/role`, config);
    dispatch({
      type: GET_ROLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ROLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const patchRole = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_ROLES_REQUEST });

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
      `${BASE_URL}/api/v1/role/${id}`,
      {},
      config
    );
    dispatch({
      type: UPDATE_ROLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ROLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeRole = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_ROLES_REQUEST });

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
      `${BASE_URL}/api/v1/role/${id}`,
      config
    );
    dispatch({
      type: DELETE_ROLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ROLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
