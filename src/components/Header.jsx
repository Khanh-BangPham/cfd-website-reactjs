import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { LOGIN_PATH } from "../constants/path";
import { AuthContext } from "../context/AuthContext";
import { authLogout } from "../stores/auth";
import { togglePopupLogin } from "../stores/page";

export default function Header({}) {
  // const { user, handleLogout } = useContext(AuthContext);

  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    document.body.classList.toggle("menu-is-show");
  };

  const openPopupLogin = (ev) => {
    ev.preventDefault();
    dispatch(togglePopupLogin(true));
  };

  // console.log("Header rerender");
  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger" onClick={toggleMenu}>
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link to="/" className="logo">
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          {user ? (
            <div className="have-login">
              <div className="account">
                <Link to="/ca-nhan" className="info">
                  <div className="name">{user.name}</div>
                  <div className="avatar">
                    <img src={user.avatar} alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <NavLink to="/ca-nhan/khoa-hoc">Khóa học của tôi</NavLink>
                <NavLink to="/ca-nhan" end>
                  Thông tin tài khoản
                </NavLink>
                <a href="#" onClick={() => dispatch(authLogout())}>
                  Đăng xuất
                </a>
              </div>
            </div>
          ) : (
            <div className="not-login bg-none">
              <Link
                to={LOGIN_PATH}
                className="btn-register"
                onClick={openPopupLogin}
              >
                Đăng nhập
              </Link>
              <a href="login.html" className="btn main btn-open-login">
                Đăng ký
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
