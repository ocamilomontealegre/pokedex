import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { GenericType } from "@common/types";

export interface IHttpAdapter<T> {
  readonly axiosInstance: AxiosInstance;
  readonly get: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  readonly post: (
    url: string,
    data?: GenericType,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>;
  readonly update: (
    url: string,
    data?: GenericType,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>;
  readonly delete: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
}
