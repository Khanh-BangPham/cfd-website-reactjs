import React, { useEffect, useState } from "react";

export default function CountDownBox(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, [count]);
  // if list is empty, useEffect only takes place once after component is first rendered
  // if list contains from variables, useEffect will take place when those variables are updated

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div
      style={{
        width: 200,
        height: 200,
        fontSize: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: props.color,
      }}
    >
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>-</button>
    </div>
  );
}
