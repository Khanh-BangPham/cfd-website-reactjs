import axios from "axios";
import { authService } from "../services/auth";
import { getToken, setToken } from "../utils/token";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST
});

api.interceptors.request.use((config) => {
  let token = getToken();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token.accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  async (error) => {
    if (error.request.status === 403) {
      let token = getToken();

      if (token) {
        const refresh = await authService.refreshToken({
          refreshToken: token.refreshToken,
        });

        if (refresh.data) {
          token.accessToken = refresh.data.accessToken;
          setToken(token);

          return api(error.config);
        }
      }
    }
    return error.response.data;
  }
);

export default api;
