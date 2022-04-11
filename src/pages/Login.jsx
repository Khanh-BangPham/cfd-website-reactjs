import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { AuthContext } from "../context/AuthContext";
import { authService } from "../services/auth";
import userService from "../services/user";
import { authLogin } from "../stores/auth";
import { setToken } from "../utils/token";

export default function Register() {
  const { user, errorMessage } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({});

  const btnClick = async (ev) => {
    ev.preventDefault();

    const errorObj = {};

    if (!form.username) {
      errorObj.username = "Username is required";
    }

    if (!form.password) {
      errorObj.password = "Password is required";
    }

    setErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      dispatch(authLogin(form));
    }
  };

  if (user) return <Navigate to="/" />;
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">LOGIN</div>
            <form className="form">
              <Input
                label="Username"
                onChange={(ev) => (form.username = ev.target.value)}
                placeholder="Enter username"
                error={errors.username}
                required
              />
              <Input.Password
                label="Password"
                onChange={(ev) => (form.password = ev.target.value)}
                placeholder="Enter password"
                error={errors.password}
                required
              />

              {errorMessage && <p className="error-text">{errorMessage}</p>}
              <button className="btn main rect" onClick={btnClick}>
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
