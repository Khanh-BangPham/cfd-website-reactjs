import { createContext, useEffect, useState } from "react";
import { USER_STORAGE_KEY } from "../constants/key";
import { authService } from "../services/auth";
import { userService } from "../services/user";
import { clearToken, getToken, setToken } from "../utils/token";

export const AuthContext = createContext();

let _user = localStorage.getItem(USER_STORAGE_KEY);
if (_user) {
  _user = JSON.parse(_user);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(_user);

  useEffect(async () => {
    const token = getToken();

    if (token) {
      const user = await userService.getInfo();

      if (user.data) {
        setUser(user.data);
      } else {
        console.log("No user data", user);
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
      clearToken();
    }
  }, [user]);

  const handleLogin = async (data) => {
    console.log("In handleLogin", data);
    const res = await authService.login(data);

    if (res.message) {
      console.log(
        "Got response back from login request with message:",
        res.message
      );
      return res.message;
    }

    if (res.data) {
      setToken(res.data);
    }
    console.log("getInfo in handleLogin");
    const user = await userService.getInfo();

    console.log("Got user", user);

    if (user.data) {
      setUser(user.data);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.data));
    }
  };

  const handleLogout = () => {
    setUser();

    // use useEffect instead
    // localStorage.removeItem(USER_STORAGE_KEY);
    // localStorage.removeItem(TOKEN_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
