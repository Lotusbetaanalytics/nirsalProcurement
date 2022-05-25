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
      setData(data.data.filter((item) => item.status === "Approved"));
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
//get all pending projects
export const getPendingProjects = (setLoading, setData) => {
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
      // eslint-disable-next-line eqeqeq
      setData(data.data.filter(({ status }) => status == "Pending"));
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
//get all closed projects
export const getClosedProjects = (setLoading, setData) => {
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
      // eslint-disable-next-line eqeqeq
      setData(data.data.filter(({ status }) => status == "Closed"));
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
//get all approved projects
export const getApprovedProjects = (setLoading, setData) => {
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
      // eslint-disable-next-line eqeqeq
      setData(data.data.filter(({ isApproved }) => isApproved == true));
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
//get a single project
export const getSingleProject = (id, setLoading, setData, ...rest) => {
  console.log(rest);
  return axios
    .get(`/api/v1/projectInitiation/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    })
    .then(({ data }) => {
      console.log(data.data);
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
