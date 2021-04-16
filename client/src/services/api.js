import axios from "axios";

const host = "http://localhost:5001/api";

export const setToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const call = async (method, path, data) => {
  const response = await axios[method](`${host}/${path}`, data);
  return response.data;
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { call, setToken };
