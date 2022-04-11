import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Head from "../../components/Head";
import Input from "../../components/Input";
import { useCourseDetail } from "../../hooks/useCourseDetail";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/course";
import { currency } from "../../utils/number";

export default function CourseRegister() {
  const { id } = useParams();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();

  // const detail = useCourseDetail(id);

  useEffect(async () => {
    const res = await courseService.getDetail(id);
    if (res.data) {
      setDetail(res.data);
    }
  }, [id]);

  const btnClick = (ev) => {
    ev.preventDefault();

    const errorObj = {};

    if (!form.username) {
      errorObj.username = "Username is required";
    }

    if (!form.phone) {
      errorObj.phone = "Phone is required";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObj.phone = "Phone number is invalid.";
    }

    if (!form.email) {
      errorObj.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errorObj.email = "Email is invalid.";
    }

    if (!form.facebook) {
      errorObj.facebook = "Facebook is required";
    }

    setErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      alert("Validated successfully!");
      // call api
    }
  };
  return (
    <main className="register-course" id="main">
      <Head>
        <title>{detail.title}</title>
      </Head>
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến {detail.title} </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> {detail.opening_time}
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> {detail.count_video} buổi
              </div>
              <div className="time">
                <strong>Học phí:</strong>
                {currency(detail.money)}
              </div>
            </div>
            <form className="form">
              <Input
                label="Họ và tên"
                onChange={(ev) => (form.username = ev.target.value)}
                placeholder="Họ và tên bạn"
                error={errors.username}
                required
              />
              <Input
                label="Số điện thoại"
                onChange={(ev) => (form.phone = ev.target.value)}
                placeholder="Số điện thoại"
                error={errors.phone}
                required
              />
              <Input.Email
                label="Email"
                onChange={(ev) => (form.email = ev.target.value)}
                placeholder="Email của bạn"
                error={errors.email}
                required
              />
              <Input
                label="URL Facebook"
                onChange={(ev) => (form.facebook = ev.target.value)}
                placeholder="https://facebook.com"
                error={errors.facebook}
                required
              />
              <Input.Number
                label="Age"
                onChange={(ev) => (form.age = ev.target.value)}
                placeholder="Enter age"
              />
              <label>
                <p>Ý kiến cá nhân</p>
                <input
                  type="text"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                />
              </label>
              <button className="btn main rect" onClick={btnClick}>
                đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
