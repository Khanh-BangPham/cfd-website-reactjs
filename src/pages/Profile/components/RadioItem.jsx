import React from "react";

export default function RadioItem({ value }) {
  return (
    <label className="checkcontainer">
      {value}
      <input type="radio" name="radio" />
      <span className="checkmarkradio" />
    </label>
  );
}
