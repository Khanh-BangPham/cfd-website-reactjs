import api from "../constants/api";

export const userService = {
  getInfo() {
    return api.get("/user/get-info");
  },
  getCourses() {
    return api.get("/elearning/v4/profile/course");
  },
};

export default userService;
