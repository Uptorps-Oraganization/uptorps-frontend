/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuthState } from "@/contexthandlers/AuthContextProvider";
import axios from "axios";
import type React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { api } from "./mainapisetup";

const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

export const AuthInterceptorManager = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useAuthState();

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers["Authorization"] = `Bearer ${token}`;
                return api(originalRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          originalRequest._retry = true;
          isRefreshing = true;

          return new Promise((resolve, reject) => {
            axios
              .post(`${apiBaseURL}/accounts/refresh/`, {}, { withCredentials: true })
              .then(({ data }) => {
                const newAccessToken = data?.access;

                setAccessToken(newAccessToken);

                processQueue(null, newAccessToken);

                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                resolve(api(originalRequest));
              })
              .catch((err) => {
                processQueue(err, null);

                setAccessToken(null);
                navigate("/auth/signin", { replace: true });

                reject(err);
              })
              .finally(() => {
                isRefreshing = false;
              });
          });
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, setAccessToken, navigate]);

  return <>{children}</>;
};
