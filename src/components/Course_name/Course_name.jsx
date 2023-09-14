import PropTypes from "prop-types";
import Course_cart from "../Course_cart/Course_cart";

const Course_name = ({ course_name }) => {
    return (
        <div className="w-1/3">
            <h2>Course Name:{course_name.length}</h2>
            {
                course_name.map(course_cart => <Course_cart key={course_cart.id} course_cart={course_cart}></Course_cart>)
            }
        </div>
    );
};

Course_name.propTypes = {
    course_name: PropTypes.array
}

export default Course_name;