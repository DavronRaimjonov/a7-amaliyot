import axios from "axios";

export const useAxios = () => {
  const request = ({ url, body, method = "GET" }) => {
    return axios({ url: `http://localhost:3001/${url}`, data: body, method });
  };
  return request;
};
