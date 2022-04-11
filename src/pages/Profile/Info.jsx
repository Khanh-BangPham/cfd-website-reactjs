import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Info() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  // const { user } = useContext(AuthContext);

  const { user } = useSelector((store) => store.auth);
  return (
    <div className="tab1" style={{ display: "block" }}>
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input type="text" placeholder={user.name} />
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input type="text" placeholder="0949******" />
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input placeholder={user.email} disabled="" type="text" />
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input type="text" placeholder="Facebook url" />
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input type="text" placeholder="Skype url" />
      </label>
      <button className="btn main rect" onClick={onClick}>
        LƯU LẠI
      </button>
    </div>
  );
}
