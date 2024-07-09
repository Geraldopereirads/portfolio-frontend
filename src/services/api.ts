import axios from "axios";

export const api = axios.create({
  baseURL: "https://portfolio-backend-stqj.onrender.com",
  timeout: 5000,
});
