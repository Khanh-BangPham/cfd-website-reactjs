import api from "../constants/api";

export const authService = {
  login(data) {
    return api.post("/login", data);
  },
  refreshToken(data) {
    // console.log("In refreshToken", data);
    return api.post("/refresh-token", data);
  },
};
