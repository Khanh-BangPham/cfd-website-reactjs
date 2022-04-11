import React from "react";

export default function CoinHistoryItem({ coin, date, content, status }) {
  const className = "coin" + (parseInt(coin) < 0 ? " red" : "");
  return (
    <div className="itemhistory">
      <div className="td">
        <span className={className}>{coin}</span>
      </div>
      <div className="td">{date}</div>
      <div className="td">{content}</div>
      <div className="td">{status}</div>
    </div>
  );
}
