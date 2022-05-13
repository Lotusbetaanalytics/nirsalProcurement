import axios from "axios";

//get all total projects
export const getTotalProjects = (setLoading, setData) => {
  return axios
    .get(`/api/v1/projectInitiation`)
    .then((response) => {
      setData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
