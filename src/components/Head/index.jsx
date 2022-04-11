import React from "react";
import reactDOM from "react-dom";

export default function Head({ children }) {
  return reactDOM.createPortal(children, document.head);
}
