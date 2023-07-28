import axios from "axios";

export const api = axios.create({
  baseURL: `https://connect-link-api.onrender.com`,
  timeout: 5000,
});
