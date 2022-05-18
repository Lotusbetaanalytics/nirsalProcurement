import axios from "axios";

//get all total projects
export const getTotalProjects = (setLoading, setData) => {
  return axios
    .get(`/api/v1/projectInitiation`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    })
    .then(({ data }) => {
      setData(data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};

export const assignProject = (id, setLoading, setData, handleClose) => {
  return axios
    .patch(
      `/api/v1/projectInitiation/assign/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo")).token
          }`,
        },
      }
    )
    .then(({ data }) => {
      setData(data.data);
      setLoading(false);
      handleClose();
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
export const approveProject = (id, setLoading, setData, handleClose) => {
  return axios
    .patch(
      `/api/v1/projectInitiation/approve/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo")).token
          }`,
        },
      }
    )
    .then(({ data }) => {
      setData(data.data);
      setLoading(false);
      handleClose();
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
