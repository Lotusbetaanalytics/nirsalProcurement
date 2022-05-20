import axios from "axios";

import {
  GET_PROCUREMENTHEAD_REQUEST,
  GET_PROCUREMENTHEAD_SUCCESS,
  GET_PROCUREMENTHEAD_FAIL,
  GET_FRONTDESK_REQUEST,
  GET_FRONTDESK_SUCCESS,
  GET_FRONTDESK_FAIL,
  GET_PROJECTDESK_REQUEST,
  GET_PROJECTDESK_SUCCESS,
  GET_PROJECTDESK_FAIL,
} from "../../constants/HopConstant/getProjectUserConstants";

export const getProcurementPerso = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PROCUREMENTHEAD_REQUEST,
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
    const { data } = await axios.get("/api/v1/staff/headOfProcurement", config);
    dispatch({
      type: GET_PROCUREMENTHEAD_SUCCESS,
      payload: data,
    });
    localStorage.setItem("procurementHead", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_PROCUREMENTHEAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFrontDeskPerso = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_FRONTDESK_REQUEST,
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
    const { data } = await axios.get("/api/v1/staff/frontDeskOfficer", config);
    dispatch({
      type: GET_FRONTDESK_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("frontDesk", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_FRONTDESK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProjectDeskPersonal = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PROJECTDESK_REQUEST,
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
      "/api/v1/staff/projectDeskOfficer",
      config
    );
    dispatch({
      type: GET_PROJECTDESK_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("projectDesk", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_PROJECTDESK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
