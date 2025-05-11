import axios from "axios";
import api from "../constants/api";

const instance = axios.create({
  baseURL: api.baseUrl,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export { instance };
