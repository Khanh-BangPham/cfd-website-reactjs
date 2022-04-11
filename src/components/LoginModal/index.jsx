import React, { useState } from "react";
import reactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { authLogin } from "../../stores/auth";
import { togglePopupLogin } from "../../stores/page";
import Input from "../Input";

export default function LoginModal() {
  const { user, errorMessage } = useSelector((store) => store.auth);
  const { isOpenLogin } = useSelector((store) => store.page);
  const dispatch = useDispatch();

  // const [errorMessage, setErrorMessage] = useState();
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

  // if (user) return <Navigate to="/" />;

  return reactDom.createPortal(
    <div
      className="popup-form popup-login"
      style={{ display: isOpenLogin ? "flex" : "none" }}
    >
      <div className="wrap">
        <div className="ct_login" onClick={() => dispatch(togglePopupLogin)}>
          <h2 className="title">Đăng nhập</h2>
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
          {/* <input type="text" placeholder="Email / Số điện thoại" />
          <input type="password" placeholder="Mật khẩu" />
          <div className="remember">
            <label className="btn-remember">
              <div>
                <input type="checkbox" />
              </div>
              <p>Nhớ mật khẩu</p>
            </label>
            <a href="#" className="forget">
              Quên mật khẩu?
            </a>
          </div>
          <div className="btn rect main btn-login">đăng nhập</div> */}
          <div
            className="close"
            onClick={() => dispatch(togglePopupLogin(false))}
          >
            <img src="/img/close-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
