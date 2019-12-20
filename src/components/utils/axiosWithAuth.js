import axios from "axios";

//Axios function that attaches a token to the call.
export const axiosWithAuth = token => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    },
    // baseURL: process.env.REACT_APP_BASEURL
    baseURL: process.env.REACT_APP_LOCALURL
  });
};
