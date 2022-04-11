import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseList } from "../stores/course";

export const useCourseList = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((store) => store.course);

  useEffect(() => {
    dispatch(getCourseList());
  }, []);

  return list;
};
