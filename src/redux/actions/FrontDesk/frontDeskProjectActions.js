import axios from "axios";
import { GET_CONFIRMED_PROJECT_FAIL, GET_CONFIRMED_PROJECT_REQUEST, GET_CONFIRMED_PROJECT_SUCCESS, GET_PENDING_PROJECT_FAIL, GET_PENDING_PROJECT_REQUEST, GET_PENDING_PROJECT_SUCCESS, GET_REJECTED_PROJECT_FAIL, GET_REJECTED_PROJECT_REQUEST, GET_REJECTED_PROJECT_SUCCESS, INITIATE_PROJECT_FAIL, INITIATE_PROJECT_REQUEST, INITIATE_PROJECT_SUCCESS } from "../../constants/FrontDesk/frontDeskProject";

export const frontdeskInitiateProject = (employeeEmail,employeeName,projectTitle,vendorName,headOfProcurement,document) => async (dispatch, getState) => {
    try {
      dispatch({ type: INITIATE_PROJECT_REQUEST });
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
      const { data } = await axios.post(`/api/v1/projectInitiation`, { employeeEmail,employeeName,projectTitle,vendorName,headOfProcurement,document }, config);
      dispatch({
        type: INITIATE_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: INITIATE_PROJECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const frontDeskConfirmedProject = () => async (dispatch, getState) => {
    try {
      dispatch({ type: GET_CONFIRMED_PROJECT_REQUEST });
  
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
      const { data } = await axios.get(`/api/v1/projectInitiation/approved`, config);
      dispatch({
        type: GET_CONFIRMED_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CONFIRMED_PROJECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const frontDeskPendingProject = () => async (dispatch, getState) => {
    try {
      dispatch({ type: GET_PENDING_PROJECT_REQUEST });
  
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
      const { data } = await axios.get(`/api/v1/projectInitiation/pending`, config);
      dispatch({
        type: GET_PENDING_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PENDING_PROJECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const frontDeskRejectedProject = () => async (dispatch, getState) => {
    try {
      dispatch({ type: GET_REJECTED_PROJECT_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
           Authorization: `Bearer ${userInfo.userInfo}`,
        },
      };
      const { data } = await axios.get(`api/v1/projectInitiation/Declined`, config);
      dispatch({
        type: GET_REJECTED_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_REJECTED_PROJECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };