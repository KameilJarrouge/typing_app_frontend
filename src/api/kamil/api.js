import Axios from "axios";
import { getToken } from "../../helpers/kamil/token";

export const BASE_URL = "http://localhost:3004";
const api = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
  // withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    let token = "Bearer " + String(getToken());
    config.headers["Authorization"] = token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
api.interceptors.response.use(null, (error) => {});

export default api;
