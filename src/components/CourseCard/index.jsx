import React from "react";
import { generatePath, Link } from "react-router-dom";
import { COURSE_DETAIL_PATH } from "../../constants/path";

export default function CourseCard({
  slug,
  short_description,
  thumbnail,
  title,
  id,
  course_status,
  teacher,
  userCount,
  heartCount,
  className,
}) {
  const detailPath = generatePath(COURSE_DETAIL_PATH, { slug, id });
  // console.log("teacher", teacher);
  return (
    <div className={className || "col-md-4 course"}>
      <div className="wrap">
        <Link className="cover" to={detailPath}>
          <img src={thumbnail?.link} alt="" />
          <span className="badge b1">{course_status}</span>
          <div className="hover">
            <div className="top">
              {userCount && (
                <div className="user">
                  <img src="/img/icon-user-white.svg" alt="" />
                  {userCount}
                </div>
              )}
              {heartCount && (
                <div className="heart">
                  <img src="/img/icon-heart.svg" alt="" /> {heartCount}
                </div>
              )}
            </div>
            <div className="share">
              <img src="/img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </Link>
        <div className="info">
          <a className="name" href="#">
            {title}
          </a>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          {teacher && (
            <div className="teacher">
              <div className="avatar">
                <img src={teacher.avatar?.link} alt="" />
              </div>
              <div className="name">{teacher.title}</div>
            </div>
          )}
          <div className="register-btn">Đăng Ký</div>
        </div>
      </div>
    </div>
  );
}
