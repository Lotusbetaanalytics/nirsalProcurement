import axios from "axios";
import {
  GET_TEAM_FAIL,
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  GET_SINGLE_TEAM_REQUEST,
  GET_SINGLE_TEAM_SUCCESS,
  GET_SINGLE_TEAM_FAIL,
} from "../../constants/team/teamConstants";

export const getAllTeams = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_TEAM_REQUEST,
    });

    const response = await axios.get(`/api/v1/team`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    dispatch({
      type: GET_TEAM_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TEAM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSingleTeam = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_SINGLE_TEAM_REQUEST,
    });

    const response = await axios.get(`/api/v1/staff/team/${id}`, {
      contentType: "application/json",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    dispatch({
      type: GET_SINGLE_TEAM_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_TEAM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
