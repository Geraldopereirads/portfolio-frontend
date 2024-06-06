import axios from "axios";

export const api = axios.create({
  baseURL: "https://portfoliobackend-peem.onrender.com",
  timeout: 5000,
});
