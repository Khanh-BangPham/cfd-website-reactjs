import React from "react";
import CourseCard from "../../components/CourseCard";

export default function Project() {
  const teacher = {
    avatar: { link: "https://www.cfdtraining.vn/uploads/vuong-cfd.jpg" },
    title: "Đặng Vương",
  };
  return (
    <div className="tab3" style={{ display: "block" }}>
      <div className="row">
        <CourseCard
          name="Furnitown"
          short_description="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
          teacher={teacher}
          img="/img/img8.png"
          buttonText="Website"
          className="col-md-6 course"
          slug="tmp"
          id="1"
          thumbnail={{ link: "/img/img1.png" }}
        />
        <CourseCard
          name="GboxMB"
          short_description="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
          teacher={teacher}
          img="/img/img5.png"
          buttonText="Website"
          className="col-md-6 course"
          slug="tmp"
          id="2"
          thumbnail={{ link: "/img/img1.png" }}
        />
      </div>
      <div className="btn-wrap">
        <div className="btn overlay btn-icon round">
          <img src="/img/icon-upload.svg" alt="" /> Tải lên
        </div>
      </div>
    </div>
  );
}
