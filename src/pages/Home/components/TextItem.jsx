import React from "react";

export default function TextItem({ title, content }) {
  return (
    <div className="item">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
