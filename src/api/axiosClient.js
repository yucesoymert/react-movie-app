import axios from "axios";

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => ({
  ...config,
  params: {
    ...config.params,
    api_key: apiConfig.apiKey,
  },
}));

axiosClient.interceptors.response.use(async (response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosClient;
