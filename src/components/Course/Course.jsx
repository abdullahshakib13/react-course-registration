import PropTypes from 'prop-types';

const Course = ({ course,handleAddToCourse_name }) => {
    const { image,course_name,course_details,price,credit } = course;
    return (
        <div>
           
                <img src={image} alt="" />
                <div>
                   <h2 className='text-{#1C1B1B} text-lg font-semibold'>{course_name}</h2>
                    <p className='text-{#1C1B1B99} text-sm font-normal'>{course_details}</p>
                </div>    
                <div className="flex justify-between text-{#1C1B1B99} text-base font-medium">
                   <p>$ Price:{price}</p>
                    <p>Credit: { credit}</p>     
                </div>
        <button onClick={handleAddToCourse_name} className="text-white text-lg font-semibold bg-blue-500 w-64 h-10 rounded-lg">Select</button>
        </div>
    );
};

Course.propTypes = {
    course:PropTypes.object
}

export default Course;