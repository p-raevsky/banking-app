import axios from "axios";
import { ApiSettings } from "../settings";

export const createAPI = () => {
  const api = axios.create({
    baseURL: ApiSettings.BACKEND_URL,
    timeout: ApiSettings.REQUEST_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Expose-Headers": "x-api-key",
    },
  });

  api.defaults.headers.common = {
    "x-api-key": ApiSettings.KEY_VALUE,
  };

  return api;
};
