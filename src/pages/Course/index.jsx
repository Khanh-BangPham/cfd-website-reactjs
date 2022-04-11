import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
import { courseService } from "../../services/course";
import useQuery from "../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { getCourseList } from "../../stores/course";
import { useCourseList } from "../../hooks/useCourseList";
import Head from "../../components/Head";

export default function Course() {
  // const [courses, setCourses] = useState();

  // useEffect(() => {
  //   courseService.getList().then((res) => setCourses(res.data));
  // }, []);

  // const { data: courses } = useQuery(() => courseService.getList(), []);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCourseList());
  // }, []);

  const courses = useCourseList();

  return (
    <>
      <section className="section-courseoffline">
        <Head>
          <title>Courses</title>
        </Head>
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
          </div>
          <div className="list row" style={{ margin: "50px" }}>
            {courses?.map((e) => (
              <CourseCard key={e.id} {...e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
