import {
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAIL,
  GET_SINGLE_TEAM_FAIL,
  GET_SINGLE_TEAM_REQUEST,
  GET_SINGLE_TEAM_SUCCESS,
} from "../../constants/team/teamConstants";

export const getTeamReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TEAM_REQUEST:
      return { loading: true };
    case GET_TEAM_SUCCESS:
      return { loading: false, success: true, data: payload };
    case GET_TEAM_FAIL:
      return { loading: false, success: false, data: payload };

    default:
      return state;
  }
};

export const getSingleTeamReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_TEAM_REQUEST:
      return { loading: true };
    case GET_SINGLE_TEAM_SUCCESS:
      return { loading: false, success: true, data: payload };
    case GET_SINGLE_TEAM_FAIL:
      return { loading: false, success: false, data: payload };

    default:
      return state;
  }
};
