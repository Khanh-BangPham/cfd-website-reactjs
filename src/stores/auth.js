import { USER_STORAGE_KEY } from "../constants/key";
import { authService } from "../services/auth";
import userService from "../services/user";
import { clearToken, getToken, setToken } from "../utils/token";
import { togglePopupLogin } from "./page";

let _user = localStorage.getItem(USER_STORAGE_KEY);
if (_user) {
  _user = JSON.parse(_user);
}

const initialState = {
  user: _user,
  errorMessage: "",
};

export const authLogin = (form) => {
  return async (dispatch) => {
    const res = await authService.login(form);

    if (res.message) {
      // return res.message;
      return dispatch({ type: "auth/errorMessage", payload: res.message });
    }

    dispatch(togglePopupLogin());
    dispatch({ type: "auth/errorMessage", payload: null });
    setToken(res.data);

    const user = await userService.getInfo();
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.data));

    dispatch({
      type: "auth/login",
      payload: user.data,
    });
  };

  // localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  // return {
  //   type: "auth/login",
  //   payload: user,
  // };
};

export const authGetInfo = () => {
  return async (dispatch) => {
    const token = getToken();
    if (token) {
      const user = await userService.getInfo();
      if (user.data) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.data));
        dispatch({ type: "auth/login", payload: user.data });
      }
    }
  };
};

export const authLogout = () => {
  clearToken();
  localStorage.removeItem(USER_STORAGE_KEY);
  return {
    type: "auth/logout",
  };
};

export const authReducer = (state = initialState, action) => {
  // console.log("authReducer", action);
  switch (action.type) {
    case "auth/login":
      return { ...state, user: action.payload };
    case "auth/logout":
      return { ...state, user: null };
    case "auth/errorMessage":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
