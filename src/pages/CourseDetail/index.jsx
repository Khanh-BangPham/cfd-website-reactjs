import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generatePath,
  Link,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import Accordion from "../../components/Accordion";
import CourseCard from "../../components/CourseCard";
import Head from "../../components/Head";
import { COURSE_REGISTER_PATH, HOME_PATH } from "../../constants/path";
import { useCourseDetail } from "../../hooks/useCourseDetail";
import { useCourseList } from "../../hooks/useCourseList";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/course";
import { getCourseDetail } from "../../stores/course";
import { currency } from "../../utils/number";
import Teacher from "./Teacher";

export default function CourseDetail() {
  // const [detail, setDetail] = useState({});

  const [accordionOpen, setAccordionOpen] = useState(-1);

  const { id } = useParams();
  // console.log("id", id);
  const navigate = useNavigate();
  // useEffect(async () => {
  //   const res = await courseService.getDetail(id);

  //   if (res.data) {
  //     setDetail(res.data);
  //     console.log("Getting data for course: ", id);
  //   } else {
  //     navigate(HOME_PATH);
  //   }
  // }, [id]);

  // const { data: detail } = useQuery(
  //   async () => {
  //     const res = await courseService.getDetail(id);
  //     if (res.data.data) {
  //       return res;
  //     } else {
  //       navigate(HOME_PATH);
  //     }
  //   },
  //   [],
  //   {}
  // );

  // const dispatch = useDispatch();
  // const { cache } = useSelector((store) => store.course);

  // const detail = cache[id] || {};
  // useEffect(() => {
  //   dispatch(getCourseDetail(id));
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const detail = useCourseDetail(id);
  const loading = !detail?.id;

  const { teacher, mentor } = detail;

  const registerPath = generatePath(COURSE_REGISTER_PATH, { id });

  const list = useCourseList();

  return (
    <main className="course-detail" id="main">
      <Head>
        <title>{detail.title}</title>
      </Head>
      <section className="banner style2" style={{ "--background": "#cde6fb" }}>
        <div className="container">
          <div className="info">
            {!loading ? (
              <h1>Thực Chiến {detail.title}</h1>
            ) : (
              <Skeleton height={128} width={"100%"} />
            )}
            {detail.opening_time ? (
              <div className="row">
                <div className="date">
                  <strong>Khai giảng:</strong> {detail.opening_time}
                </div>
                <div className="time">
                  <strong>Thời lượng:</strong> 18 buổi
                </div>
              </div>
            ) : (
              <Skeleton variant="text" width={"70%"} />
            )}

            <Link
              to={registerPath}
              className="btn white round"
              style={{ "--colorBtn": "#70b6f1" }}
            >
              đăng ký
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video">
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div>{" "}
              <span>giới thiệu</span>
            </div>
            <div className="money">{currency(detail.money)}</div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <p className="des">{detail.long_description}</p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src="/img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          <Accordion.Group>
            {detail.content?.map((e, i) => (
              <Accordion
                onClick={() => setAccordionOpen(i)}
                key={i}
                index={i + 1}
                {...e}
              />
            ))}
          </Accordion.Group>
          {/* {detail.content?.map((e, i) => (
            <Accordion
              onClick={() => setAccordionOpen(i)}
              open={i === accordionOpen}
              key={i}
              index={i + 1}
              {...e}
            />
          ))} */}
          <h3 className="title">yêu cầu cần có</h3>
          <div className="row row-check">
            {detail.required?.map((e, i) => (
              <div key={i} className="col-md-6">
                {e.content}
              </div>
            ))}
          </div>
          <h3 className="title">hình thức học</h3>
          <div className="row row-check">
            {detail.benefits?.map((e, i) => (
              <div key={i} className="col-md-6">
                {e.content}
              </div>
            ))}
          </div>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">
              *Lịch học và thời gian có thể thống nhất lại theo số đông học
              viên.
            </div>
          </h3>
          <p>
            <strong>Ngày bắt đầu: </strong> {detail.opening_time} <br />
            <strong>Thời gian học: </strong> {detail.schedule}
          </p>
          <h3 className="title">Người dạy</h3>
          <Teacher teacher={teacher} />
          <h3 className="title">Người huong dan</h3>
          {mentor?.map((e, i) => (
            <Teacher key={i} teacher={e} />
          ))}
          <div className="bottom">
            <div className="user">
              <img src="/img/user-group-icon.png" alt="" />{" "}
              {detail.number_student_default} bạn đã đăng ký
            </div>
            <Link to={registerPath} className="btn main btn-register round">
              đăng ký
            </Link>
            <div className="btn-share btn overlay round btn-icon">
              <img src="/img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
          </div>
          <div className="list row">
            {/* <CourseCard
              name="React JS"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Vương Đặng"
              img="/img/img.png"
            />
            <CourseCard
              name="Animation"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              img="/img/img2.png"
            />
            <CourseCard
              name="Scss, Grunt JS và Boostrap 4"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              img="/img/img3.png"
            /> */}
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            {list?.slice(0, 3).map((e) => {
              <CourseCard key={e.id} />;
            })}
            {/* <CourseCard
              name="Front-end căn bản"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Vương Đặng"
              img="/img/img.png"
            />
            <CourseCard
              name="Front-end nâng cao"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              img="/img/img2.png"
            />
            <CourseCard
              name="Laravel framework"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              img="/img/img3.png"
            /> */}
          </div>
        </div>
      </section>
    </main>
  );
}
