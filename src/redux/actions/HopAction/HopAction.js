import axios from "axios";
import {
  CREATE_NEWPROJECTLIST_REQUEST,
  CREATE_NEWPROJECTLIST_SUCCESS,
  CREATE_NEWPROJECTLIST_FAIL,
  // CREATE_NEWPROJECTLIST_RESET,
} from "../../constants/HopConstant/hopConstant";

export const postNewProjectList =
  (projectData) => async (dispatch, getState) => {
    // console.log(staffData);
    try {
      dispatch({
        type: CREATE_NEWPROJECTLIST_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      //   console.log(userInfo.access);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      console.log(userInfo.token);
      const { data } = await axios.post(
        "/api/v1/projectInitiation",
        projectData,
        config
      );
      dispatch({
        type: CREATE_NEWPROJECTLIST_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: CREATE_NEWPROJECTLIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
