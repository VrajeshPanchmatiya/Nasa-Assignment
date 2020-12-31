import axios from "axios";

export const allUserApi = () => {
  return axios.get(`${process.env.REACT_APP_API_RANDOM}`);
};
