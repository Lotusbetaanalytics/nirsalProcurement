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

export const getProcurementHeadReducer = (
  state = { procurementHead: [] },
  action
) => {
  switch (action.type) {
    case GET_PROCUREMENTHEAD_REQUEST:
      return { loading: true };
    case GET_PROCUREMENTHEAD_SUCCESS:
      return {
        loading: false,
        success: true,
        procurementHea: action.payload.data,
      };
    case GET_PROCUREMENTHEAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getFrontDeskReducer = (state = { frontdesk: [] }, action) => {
  switch (action.type) {
    case GET_FRONTDESK_REQUEST:
      return { loading: true };
    case GET_FRONTDESK_SUCCESS:
      return { loading: false, success: true, frontDesk: action.payload.data };
    case GET_FRONTDESK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getProjectDeskReducer = (state = { projectDesk: [] }, action) => {
  switch (action.type) {
    case GET_PROJECTDESK_REQUEST:
      return { loading: true };
    case GET_PROJECTDESK_SUCCESS:
      return {
        loading: false,
        success: true,
        projectDesk: action.payload.data,
      };
    case GET_PROJECTDESK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
