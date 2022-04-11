import React from "react";

export default function PaymentItem({ title, date, amount }) {
  return (
    <div className="item itemhistory">
      <div className="name">{title}</div>
      <div className="date">{date}</div>
      <div className="money">{amount}</div>
    </div>
  );
}
