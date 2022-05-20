import {  GET_HEAD_OF_PROCUREMENT_FAIL, GET_HEAD_OF_PROCUREMENT_REQUEST, GET_HEAD_OF_PROCUREMENT_SUCCESS } from "../../constants/HeadofProcurement/HeadofProcurement";

export const headofProcurementReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_HEAD_OF_PROCUREMENT_REQUEST:
        return { loading: true };
      case GET_HEAD_OF_PROCUREMENT_SUCCESS:
        return { loading: false, success: true, data:action.payload.data };
      case GET_HEAD_OF_PROCUREMENT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
