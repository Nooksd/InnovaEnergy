import axios from "axios";
import { refreshAccessToken } from "../store/slicers/userSlicer";
import store from "../store";

// export const baseURL = "https://controll-api.innova-energy.com.br/api/";
export const baseURL = "http://localhost:3000/api/";

export const innovaApi = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

innovaApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await store.dispatch(refreshAccessToken()).unwrap();

        return innovaApi(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);
