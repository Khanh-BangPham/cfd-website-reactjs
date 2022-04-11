import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterDecrement, counterIncrement } from "../../stores/counter";

const btnStyle = {
  fontSize: 50,
};

export default function Count() {
  const { value } = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  return (
    <div style={{ height: 500, marginTop: 100, fontSize: 50 }}>
      <button
        style={btnStyle}
        onClick={() => dispatch(counterDecrement())}
        // onClick={() => dispatch({ type: "counter/decrement" })}
      >
        -
      </button>
      Count: {value}
      <button
        style={btnStyle}
        onClick={() => dispatch(counterIncrement())}
        // onClick={() => dispatch({ type: "counter/increment" })}
      >
        +
      </button>
    </div>
  );
}
