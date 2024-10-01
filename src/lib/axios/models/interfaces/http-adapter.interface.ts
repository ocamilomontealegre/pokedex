import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { GenericType } from "@common/types";

export interface IHttpAdapter {
  readonly axiosInstance: AxiosInstance;
  readonly get: <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  readonly post: <T>(
    url: string,
    data?: GenericType,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>;
  readonly update: <T>(
    url: string,
    data?: GenericType,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>;
  readonly delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
}
