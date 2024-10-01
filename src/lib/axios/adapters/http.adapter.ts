import axios from "axios";
import { envConfig } from "@common/config/config";
import type { AxiosRequestConfig } from "axios";
import type { IHttpAdapter } from "../models/interfaces/http-adapter.interface";
import type { GenericType } from "@common/types";

export const createHttpAdapter = (baseURL: string): IHttpAdapter => {
  const axiosInstance = axios.create({
    baseURL,
    timeout: envConfig.axiosTimeout,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    axiosInstance,
    get: <T>(url: string, config?: AxiosRequestConfig) => axiosInstance.get<T>(url, config),
    post: <T>(url: string, data?: GenericType, config?: AxiosRequestConfig) =>
      axiosInstance.post<T>(url, data, config),
    update: <T>(url: string, data?: GenericType, config?: AxiosRequestConfig) =>
      axiosInstance.put<T>(url, data, config),
    delete: <T>(url: string, config?: AxiosRequestConfig) => axiosInstance.delete<T>(url, config),
  };
};
