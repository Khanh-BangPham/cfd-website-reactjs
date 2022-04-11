const initialState = {
  value: 10,
};

export const counterIncrement = () => ({ type: "counter/increment" });
export const counterDecrement = () => ({ type: "counter/decrement" });

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return { value: state.value + 1 };
    case "counter/decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
};
