import PropTypes from 'prop-types';

const Course_cart = ({course_cart}) => {
    const { course_name } = course_cart;
    return (
        <li>
            <h3>{ course_name }</h3>
        </li>
    );
};

Course_cart.propTypes = {
    course_cart: PropTypes.object
}

export default Course_cart;