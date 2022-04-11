import React from "react";
import CoinHistoryItem from "./components/CoinHistoryItem";
import RadioItem from "./components/RadioItem";

export default function Coin() {
  return (
    <div className="tab5 cointab" style={{ display: "block" }}>
      <div className="coininfo">
        <div className="coininfo__box">
          <h3>
            <strong>Thông tin COIN</strong>
          </h3>
          <div className="coininfo__box-ct">
            <div>
              <img src="/img/cfd-coin.png" alt="" />
              <p>
                Bạn có <strong>300</strong> COIN
              </p>
            </div>
          </div>
        </div>
        <div className="coininfo__box">
          <h3>
            <strong>Đổi COIN</strong>
          </h3>
          <div className="coininfo__box-ct">
            <RadioItem value="Voucher Tiki 100k" />
            <RadioItem value="Voucher Tiki 200k" />
            <RadioItem value="Voucher Tiki 500k" />
            <RadioItem value="Thẻ nạp điện thoại 100k" />
            <RadioItem value="Thẻ nạp điện thoại 200k" />
            <RadioItem value="Thẻ nạp điện thoại 500k" />
            <small>
              <i>*Bạn có thể đổi COIN 1 lần</i>
            </small>
          </div>
          <a href="#" className="btn main">
            Đổi COIN
          </a>
        </div>
      </div>
      <div className="coinhistory">
        <h3>
          <strong>Lịch sử COIN</strong>
        </h3>
        {/* <p>Chưa sử dụng COIN</p> */}
        <div className="itemhistory">
          <div className="td">
            <strong>COIN</strong>
          </div>
          <div className="td">
            <strong>Thời gian</strong>
          </div>
          <div className="td">
            <strong>Nội dung</strong>
          </div>
          <div className="td">
            <strong>Trạng thái</strong>
          </div>
        </div>
        <CoinHistoryItem
          coin="+500"
          date="09/12/2021"
          content="Giới thiệu khóa học cho học viên mới"
          status="Đã chấp nhận"
        />
        <CoinHistoryItem
          coin="-300"
          date="18/10/2021"
          content="Dùng COIN để quy đổi sang Voucher Tiki"
          status="Đã chấp nhận"
        />
        <CoinHistoryItem
          coin="-300"
          date="18/10/2020"
          content="Dùng COIN để đổi sang Thẻ nạp điện thoại"
          status="Chờ duyệt"
        />
      </div>
    </div>
  );
}
