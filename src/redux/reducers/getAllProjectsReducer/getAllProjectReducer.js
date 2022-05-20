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
  GET_TERMINATEDPROJECTS_REQUEST,
  GET_TERMINATEDPROJECTS_SUCCESS,
  GET_TERMINATEDPROJECTS_FAIL,
} from "../../constants/getAllProjectsConstant/getAllProjectsConstant";

export const getAllProjectReducer = (state = { allProjects: [] }, action) => {
  switch (action.type) {
    case GET_ALLPROJECTS_REQUEST:
      return { loading: true };
    case GET_ALLPROJECTS_SUCCESS:
      return {
        loading: false,
        success: true,
        allProject: action.payload.data,
      };
    case GET_ALLPROJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getNewProjectReducer = (state = { newProjects: [] }, action) => {
  switch (action.type) {
    case GET_NEWPROJECTS_REQUEST:
      return { loading: true };
    case GET_NEWPROJECTS_SUCCESS:
      return {
        loading: false,
        success: true,
        newProject: action.payload.data,
      };
    case GET_NEWPROJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getPendingProjectReducer = (
  state = { pendingProjects: [] },
  action
) => {
  switch (action.type) {
    case GET_PENDINGPROJECTS_REQUEST:
      return { loading: true };
    case GET_PENDINGPROJECTS_SUCCESS:
      return {
        loading: false,
        success: true,
        pendingProject: action.payload.data,
      };
    case GET_PENDINGPROJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getClosedProjectReducer = (
  state = { closedProjects: [] },
  action
) => {
  switch (action.type) {
    case GET_CLOSEDPROJECTS_REQUEST:
      return { loading: true };
    case GET_CLOSEDPROJECTS_SUCCESS:
      return {
        loading: false,
        success: true,
        closedProject: action.payload.data,
      };
    case GET_CLOSEDPROJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getApprovedProjectReducer = (
  state = { approvedProjects: [] },
  action
) => {
  switch (action.type) {
    case GET_APPROVEDPROJECTS_REQUEST:
      return { loading: true };
    case GET_APPROVEDPROJECTS_SUCCESS:
      return {
        loading: false,
        success: true,
        approvedProject: action.payload.data,
      };
    case GET_APPROVEDPROJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getTerminatedProjectReducer = (
  state = { terminatedProjects: [] },
  action
) => {
  switch (action.type) {
    case GET_TERMINATEDPROJECTS_REQUEST:
      return { loading: true };
    case GET_TERMINATEDPROJECTS_SUCCESS:
      return {
        loading: false,
        success: true,
        terminatedProject: action.payload.data,
      };
    case GET_TERMINATEDPROJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
