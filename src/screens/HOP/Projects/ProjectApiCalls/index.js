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
