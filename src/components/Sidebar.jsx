import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const close = () => {
    document.body.classList.toggle("menu-is-show");
  };
  return (
    <>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <NavLink onClick={close} to="/dang-nhap">
              Đăng nhập / Đăng ký
            </NavLink>
          </li>
          <li>
            <NavLink onClick={close} to="/">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink onClick={close} to="/thanh-vien">
              CFD Team
            </NavLink>
          </li>
          <li>
            <NavLink onClick={close} to="/khoa-hoc">
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink onClick={close} to="/lien-he">
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div onClick={close} className="overlay_nav" />
    </>
  );
}
