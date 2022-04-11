import React from "react";
import { Link } from "react-router-dom";

export default function Teacher({ teacher }) {
  return (
    <div className="teaches">
      <div className="teacher">
        <div className="avatar">
          <img src={teacher?.avatar?.link} alt="" />
        </div>
        <div className="info">
          <div className="name">{teacher?.title}</div>
          <div className="title">{teacher?.position}</div>
          <p className="intro">{teacher?.description}</p>
          {teacher?.website && (
            <p>
              <strong>Website:</strong>{" "}
              <a target={"_blank"} href={teacher.website}>
                {teacher.website}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
