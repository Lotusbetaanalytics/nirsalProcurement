import axios from "axios";
import {
  GET_TEAM_FAIL,
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
} from "../../constants/team/teamConstants";

export const getAllTeams = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_TEAM_REQUEST,
    });

    const response = await axios.get(`/api/teams`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });

    console.log(response.data, "data");
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
