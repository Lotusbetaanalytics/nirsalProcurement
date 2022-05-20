import axios from "axios";
import {  GET_HEAD_OF_PROCUREMENT_FAIL, GET_HEAD_OF_PROCUREMENT_REQUEST, GET_HEAD_OF_PROCUREMENT_SUCCESS } from "../../constants/HeadofProcurement/HeadofProcurement";

export const headofProcurement = () => async (dispatch, getState) => {
    try {
      dispatch({ type: GET_HEAD_OF_PROCUREMENT_REQUEST });
  
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
      const { data } = await axios.get(`/api/v1/staff/headOfProcurement`, config);
      dispatch({
        type: GET_HEAD_OF_PROCUREMENT_SUCCESS,
        payload: data,
      });

    } catch (error) {
      dispatch({
        type: GET_HEAD_OF_PROCUREMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };