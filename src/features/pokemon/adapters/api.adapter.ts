import { createHttpAdapter } from "@lib/axios/adapters/http.adapter";
import { envConfig } from "@common/config/config";
import type { Pokemon } from "@common/types";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const { pokeApiUrl } = envConfig;

export const api = createHttpAdapter<Pokemon>(pokeApiUrl);

api.axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.dir(config);
    return config;
  },
  (error: AxiosError) => {
    console.error(`Request error intercepted ${JSON.stringify(error)}`);
    return Promise.reject(error);
  },
);

api.axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.dir(response);
    return response;
  },
  (error: AxiosError) => {
    console.error(`Response error intercepted ${JSON.stringify(error)}`);
    return Promise.reject(error);
  },
);
