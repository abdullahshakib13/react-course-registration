import PropTypes from "prop-types";
import Course_cart from "../Course_cart/Course_cart";

const Course_name = ({ course_name,totalCredit,totalRemaining }) => {
    return (
        <div className=" bg-white rounded-xl p-4">
            <h3 className="text-blue-500 text-lg font-bold mb-2">Credit Hour Remaining {totalRemaining} hr</h3>
            <hr />
            <div>
                <h2 className="text-xl font-bold mt-2">Course Name</h2>
                <ol className="list-decimal pl-8 mt-4 mb-3">
                     {
                course_name.map(course_cart => <Course_cart key={course_cart.id} course_cart={course_cart}></Course_cart>)
            }
           </ol>
            </div>
            <hr />
            <div className="text-base font-medium mt-2 p-2 mb-2">
                <h3 >Total Credit Hour: { totalCredit}hr</h3>
            </div>
            <hr />
        </div>
    );
};

Course_name.propTypes = {
    course_name: PropTypes.array,
    totalCredit: PropTypes.number,
    totalRemaining: PropTypes.number
}

export default Course_name;