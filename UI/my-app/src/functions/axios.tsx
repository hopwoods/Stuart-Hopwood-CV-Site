import axios from "axios";

export const Api = axios.create({
  baseURL: "https://localhost:5001/",
  timeout: 30000,
  headers: {},
});
