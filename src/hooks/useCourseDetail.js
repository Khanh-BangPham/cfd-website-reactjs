import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail } from "../stores/course";

export const useCourseDetail = (id) => {
  const dispatch = useDispatch();
  const { cache } = useSelector((store) => store.course);

  const detail = cache[id] || {};

  useEffect(() => {
    dispatch(getCourseDetail(id));
  }, [id]);

  return cache[id] || {};
};
