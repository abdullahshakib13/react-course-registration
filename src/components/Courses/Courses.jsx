import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";


// const Courses = ({handleAddToCourse_name,handleTotalCredit}) => {
const Courses = ({handleAddToCourse_name}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="">
            <div className=" grid grid-cols-3 gap-4">
              {
                    courses.map(course => <Course key={course.id} course={course}
                        handleAddToCourse_name={handleAddToCourse_name} ></Course>)
            }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleAddToCourse_name: PropTypes.func,
    handleTotalCredit: PropTypes.func
}

export default Courses;