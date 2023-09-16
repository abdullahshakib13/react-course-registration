import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/Bs';

const Course = ({ course,handleAddToCourse_name}) => {
    const { image,course_name,course_details,price,credit } = course;
    return (
        <div className='bg-white p-5 rounded-xl'>
              <img src={image} alt="" />
                <div>
                   <h2 className='text-{#1C1B1B} text-lg mt-3 font-semibold'>{course_name}</h2>
                    <p className='text-{#1C1B1B99} mt-4 text-sm font-normal'>{course_details}</p>
                </div>    
                <div className="flex justify-between text-{#1C1B1B99} mt-3 text-base font-medium">
                <p>$ Price:{price}</p>
                <button><BsBook></BsBook></button>
                    <p>Credit: { credit}</p>     
                </div>
            <div className='flex items-center justify-center mt-3'>
                 <button onClick={()=>handleAddToCourse_name(course)} className="text-white text-lg font-semibold bg-blue-500 px-12 h-8 rounded-lg">Select</button>
       </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleAddToCourse_name: PropTypes.func
}

export default Course;