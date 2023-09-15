import PropTypes from "prop-types";
import Course_cart from "../Course_cart/Course_cart";

const Course_name = ({ course_name,totalCredit,totalRemaining }) => {
    return (
        <div className="pl-8 bg-white rounded-xl">
            <h3 className="text-blue-500 text-lg font-bold">Credit Hour Remaining {totalRemaining} hr</h3>
            <hr />
            <div>
                <h2 className="text-xl font-bold">Course Name</h2>
                <ol className="list-decimal pl-8">
                     {
                course_name.map(course_cart => <Course_cart key={course_cart.id} course_cart={course_cart}></Course_cart>)
            }
           </ol>
            </div>
            <hr />
            <div className="text-base font-medium">
                <h3 >Total Credit Hour:{ totalCredit}hr</h3>
            </div>
        </div>
    );
};

Course_name.propTypes = {
    course_name: PropTypes.array,
    totalCredit: PropTypes.number,
    totalRemaining: PropTypes.number
}

export default Course_name;