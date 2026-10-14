import axios, { type AxiosInstance } from "axios";

const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

export const api: AxiosInstance = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
