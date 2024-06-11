import axios from "axios";

export const api = axios.create({
  baseURL: "https://portfolio-backend-c9x0.onrender.com",
  timeout: 5000,
});
