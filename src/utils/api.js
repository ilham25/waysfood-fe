import axios from "axios";

export const API = axios.create({
  baseURL: "https://waysfood-be.herokuapp.com/api/v1",
});

export const setAuthToken = (token) => {
  token
    ? (API.defaults.headers.common["Authorization"] = `Bearer ${token}`)
    : delete API.defaults.headers.common["Authorization"];
};
