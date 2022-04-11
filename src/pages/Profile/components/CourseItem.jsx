import React from "react";

export default function CourseItem({
  title,
  opening_time,
  count_hour,
  count_video,
  count_student,
  thumbnail,
  slug,
}) {
  const percentage = Math.floor(Math.random() * 100) + "%";
  return (
    <div className="item">
      <div className="cover">
        <img src={thumbnail?.link} alt="" />
      </div>
      <div className="info">
        <a href="#" className="name">
          {title}
        </a>
        <div className="opening_time">Khai giảng ngày {opening_time}</div>
        <div className="row">
          <div className="">
            <img src="/img/clock.svg" alt="" className="icon" />
            {count_hour || count_video * 2} giờ
          </div>
          <div className="">
            <img src="/img/play.svg" alt="" className="icon" />
            {count_video} video
          </div>
          <div className="">
            <img src="/img/user.svg" alt="" className="icon" />
            {count_student || Math.floor(Math.random() * 20 + 5)} học viên
          </div>
        </div>
        <div className="process">
          <div className="line">
            <div className="rate" style={{ width: percentage }} />
          </div>
          {percentage}
        </div>
        <div className="btn overlay round btn-continue">Tiếp tục học</div>
      </div>
    </div>
  );
}
