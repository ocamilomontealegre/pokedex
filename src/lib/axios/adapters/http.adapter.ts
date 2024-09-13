import axios from "axios";
import { envConfig } from "@common/config/config";
import type { AxiosRequestConfig } from "axios";
import type { IHttpAdapter } from "../models/interfaces/http-adapter.interface";
import type { GenericType } from "@common/types";

export const createHttpAdapter = <T>(baseURL: string): IHttpAdapter<T> => {
  const axiosInstance = axios.create({
    baseURL,
    timeout: envConfig.axiosTimeout,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    axiosInstance,
    get: (url: string, config?: AxiosRequestConfig) => axiosInstance.get<T>(url, config),
    post: (url: string, data?: GenericType, config?: AxiosRequestConfig) =>
      axiosInstance.post<T>(url, data, config),
    update: (url: string, data?: GenericType, config?: AxiosRequestConfig) =>
      axiosInstance.put(url, data, config),
    delete: (url: string, config?: AxiosRequestConfig) => axiosInstance.delete<T>(url, config),
  };
};
