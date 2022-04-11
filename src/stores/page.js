const initialState = {
  isOpenLogin: false,
};

export const togglePopupLogin = (flag) => {
  return {
    type: "page/togglePopupLogin",
    payload: flag,
  };
};

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "page/togglePopupLogin":
      if (typeof action.payload === "undefined") {
        return { ...state, isOpenLogin: !state.isOpenLogin };
      }

      return {
        ...state,
        isOpenLogin: action.payload,
      };
    default:
      return state;
  }
};
