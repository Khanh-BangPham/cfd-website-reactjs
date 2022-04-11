import React from "react";
import CourseCard from "../../components/CourseCard";
import useQuery from "../../hooks/useQuery";
import userService from "../../services/user";
import CourseItem from "./components/CourseItem";

export default function Course() {
  const { data: courses } = useQuery(() => userService.getCourses(), []);
  // console.log(courses);

  return (
    <div className="tab2" style={{ display: "block" }}>
      {courses?.map((e) => {
        return <CourseItem key={e._id} {...e.course} />;
      })}
    </div>
  );
}
