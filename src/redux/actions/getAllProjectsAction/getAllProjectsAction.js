import axios from "axios";

import {
  GET_ALLPROJECTS_REQUEST,
  GET_ALLPROJECTS_SUCCESS,
  GET_ALLPROJECTS_FAIL,
  GET_NEWPROJECTS_REQUEST,
  GET_NEWPROJECTS_SUCCESS,
  GET_NEWPROJECTS_FAIL,
  GET_PENDINGPROJECTS_REQUEST,
  GET_PENDINGPROJECTS_SUCCESS,
  GET_PENDINGPROJECTS_FAIL,
  GET_CLOSEDPROJECTS_REQUEST,
  GET_CLOSEDPROJECTS_SUCCESS,
  GET_CLOSEDPROJECTS_FAIL,
  GET_APPROVEDPROJECTS_REQUEST,
  GET_APPROVEDPROJECTS_SUCCESS,
  GET_APPROVEDPROJECTS_FAIL,
  GET_TERMINATEDPROJECTS_SUCCESS,
  GET_TERMINATEDPROJECTS_FAIL,
  GET_TERMINATEDPROJECTS_REQUEST,
} from "../../constants/getAllProjectsConstant/getAllProjectsConstant";

export const getAllProjects = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALLPROJECTS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/v1/projectInitiation", config);
    dispatch({
      type: GET_ALLPROJECTS_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("allProject", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_ALLPROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getNewProjects = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_NEWPROJECTS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "/api/v1/projectInitiation/started",
      config
    );
    dispatch({
      type: GET_NEWPROJECTS_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("newProject", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_NEWPROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPendingProjects = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PENDINGPROJECTS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "/api/v1/projectInitiation/pending",
      config
    );
    dispatch({
      type: GET_PENDINGPROJECTS_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("pendingProject", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_PENDINGPROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getClosedProjects = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_CLOSEDPROJECTS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "/api/v1/projectInitiation/completed",
      config
    );
    dispatch({
      type: GET_CLOSEDPROJECTS_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("pendingProject", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_CLOSEDPROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getApprovedProjects = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_APPROVEDPROJECTS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "/api/v1/projectInitiation/approved",
      config
    );
    dispatch({
      type: GET_APPROVEDPROJECTS_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("approvedProject", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_APPROVEDPROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTerminatedProjects = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_TERMINATEDPROJECTS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "/api/v1/projectInitiation/terminated",
      config
    );
    dispatch({
      type: GET_TERMINATEDPROJECTS_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("terminatedProject", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_TERMINATEDPROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
