import React, { useState } from "react";
import Input from "../../components/Input";

export default function Cooperate() {
  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({});

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

    if (!form.subject) {
      errorObj.subject = "Subject is required";
    }
    if (!form.content) {
      errorObj.content = "Content is required";
    }

    setErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      alert("Validated successfully!");
      // call api
    }
  };
  return (
    <main className="register-course" id="main">
      <section className="section-1 wrap container">
        {/* <div class="main-sub-title">liên hệ</div> */}
        <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
        <p className="top-des">
          Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra
          những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển
          dụng và công ty trong và ngoài nước.
        </p>
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
            label="Website"
            onChange={(ev) => (form.website = ev.target.value)}
            placeholder="Đường dẫn website http://"
            error={errors.website}
          />
          <Input
            label="Tiêu đề"
            onChange={(ev) => (form.subject = ev.target.value)}
            placeholder="Tiêu đề liên hệ"
            error={errors.subject}
            required
          />
          <Input.Textarea
            label="Nội dung"
            onChange={(ev) => (form.content = ev.target.value)}
            error={errors.content}
            required
          />
          <button className="btn main rect" onClick={btnClick}>
            đăng ký
          </button>
        </form>
      </section>
    </main>
  );
}
