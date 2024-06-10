import axios from "axios";

export const api = axios.create({
  baseURL: "https://portfolio-frontend-5bub.onrender.com",
  timeout: 5000,
});
