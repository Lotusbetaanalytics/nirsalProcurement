import { GET_CONFIRMED_PROJECT_FAIL, GET_CONFIRMED_PROJECT_REQUEST, GET_CONFIRMED_PROJECT_SUCCESS, GET_PENDING_PROJECT_FAIL, GET_PENDING_PROJECT_REQUEST, GET_PENDING_PROJECT_SUCCESS, GET_REJECTED_PROJECT_FAIL, GET_REJECTED_PROJECT_REQUEST, GET_REJECTED_PROJECT_SUCCESS, INITIATE_PROJECT_FAIL, INITIATE_PROJECT_REQUEST, INITIATE_PROJECT_RESET, INITIATE_PROJECT_SUCCESS } from "../../constants/FrontDesk/frontDeskProject";


export const initiateNewProjectReducer = (state = {}, action) => {
    switch (action.type) {
      case INITIATE_PROJECT_REQUEST:
        return { loading: true };
      case INITIATE_PROJECT_SUCCESS:
        return { loading: false, success: true };
      case INITIATE_PROJECT_FAIL:
        return { loading: false, error: action.payload };
      case INITIATE_PROJECT_RESET:
        return {};
      default:
        return state;
    }
  };

  export const confirmedProjectReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_CONFIRMED_PROJECT_REQUEST:
        return { loading: true };
      case GET_CONFIRMED_PROJECT_SUCCESS:
        return { loading: false, success: true };
      case GET_CONFIRMED_PROJECT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const pendingProjectReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_PENDING_PROJECT_REQUEST:
        return { loading: true };
      case GET_PENDING_PROJECT_SUCCESS:
        return { loading: false, success: true };
      case GET_PENDING_PROJECT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const rejectedProjectReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_REJECTED_PROJECT_REQUEST:
        return { loading: true };
      case GET_REJECTED_PROJECT_SUCCESS:
        return { loading: false, success: true };
      case GET_REJECTED_PROJECT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };