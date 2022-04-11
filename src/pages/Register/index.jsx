import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/Input";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/course";
import { currency } from "../../utils/number";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../constants/path";
export default function Register() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: detail } = useQuery(
    async () => {
      const res = await courseService.getDetail(id);
      if (res.data) {
        return res;
      } else {
        navigate(HOME_PATH);
      }
    },
    [],
    {}
  );
  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({});

  const btnClick = (ev) => {
    ev.preventDefault();

    const errorObj = {};

    if (!form.username) {
      errorObj.username = "Tên đăng nhập không được để trống.";
    }

    if (!form.phone) {
      errorObj.phone = "Số điện thoại không được để trống.";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObj.phone = "Số điện thoại không đúng định dạng.";
    }

    if (!form.email) {
      errorObj.email = "Email không được để trống";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errorObj.email = "Email không đúng định dạng";
    }

    if (!form.facebook) {
      errorObj.facebook = "Facebook không được để trống";
    }

    setErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      alert("DONE!");
    }
  };
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến front-end căn bản </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> 15/11/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
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
