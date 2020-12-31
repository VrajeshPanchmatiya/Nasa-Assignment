import axios from "axios";

export const userApi = (id) => {
  return axios.get(
    `${process.env.REACT_APP_API_FIXED}${id}?${process.env.REACT_APP_API_KEY}`
  );
};
