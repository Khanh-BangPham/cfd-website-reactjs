import React from "react";
import PaymentItem from "./components/PaymentItem";

export default function Payment() {
  return (
    <div className="tab4" style={{ display: "block" }}>
      <PaymentItem
        title="Khóa học CFD4-offline"
        date="09/09/2020"
        amount="4.500.000 VND"
      />
      <PaymentItem
        title="Khóa học CFD3-offline"
        date="18/10/2020"
        amount="3.500.000 VND"
      />
      <PaymentItem
        title="Khóa học CFD2-offline"
        date="18/08/2019"
        amount="2.500.000 VND"
      />
      <PaymentItem
        title="Khóa học CFD1-offline"
        date="18/02/2018"
        amount="1.500.000 VND"
      />
    </div>
  );
}
