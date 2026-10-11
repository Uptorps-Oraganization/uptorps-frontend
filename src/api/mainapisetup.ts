import axios from "axios";

const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const requestInterceptor = (accessToken: string | null) =>
  api.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (err) => Promise.reject(err),
  );
