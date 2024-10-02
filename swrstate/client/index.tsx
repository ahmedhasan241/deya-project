import axios from "axios";
import { endpoint } from "../config";
import { useAdminStore } from "@/store/adminStore";

export const instance = axios.create({
  baseURL: endpoint,

  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "multipart/form-data",
  },
});
instance.interceptors.request.use(
  (config) => {
    const { token } = useAdminStore.getState();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
