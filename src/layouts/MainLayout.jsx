import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginModal from "../components/LoginModal";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
      <LoginModal />
    </>
  );
}
