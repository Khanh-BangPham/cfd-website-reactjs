import { courseService } from "../services/course";

const initialState = {
  isFetchedList: false,
  list: null,
  cache: {},
};

export const getCourseList = () => {
  return async (dispatch, getState) => {
    console.log(getState());
    const { course } = getState();
    if (!course.isFetchedList) {
      let res = await courseService.getList();
      dispatch({ type: "course/list", payload: res.data });
    }
  };
};

export const getCourseDetail = (id) => {
  return async (dispatch, getState) => {
    const { course } = getState();
    if (!course.cache[id]) {
      let res = await courseService.getDetail(id);
      dispatch({ type: "course/cache_detail", payload: res.data });
    }
  };
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "course/list":
      return {
        ...state,
        list: action.payload,
        isFetchedList: true,
      };
    case "course/cache_detail":
      return {
        ...state,
        cache: {
          ...state.cache,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};
