import './App.css'
import Course_name from './components/Course_name/Course_name'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [course_name, setCourse_name] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalRemaining, setTotalRemaining] = useState(0);

  const handleAddToCourse_name = course => {
    // console.log(course);
    const isExist = course_name.find((item) => item.id === course.id);
    
    let count = course.credit;

    if (isExist) {
      return toast.warn("Course already selected");
    } else {
      course_name.forEach((item) => {
        count = count + item.credit;
      });
      const totalRemaining = 20 - count;
      if (count > 20) {
        return toast.warn("limit 20 credit");
      } else {
        setTotalRemaining(totalRemaining);
        const addToCart = [...course_name, course];
      setCourse_name(addToCart);
      }

      // console.log(count);
      
    }
    setTotalCredit(count);
    
  }
  
  // const handleTotalCredit = credit => {
  //   // console.log('credit add',credit);
  //   const newTotalCredit = totalCredit + credit;
  //   // console.log(newTotalCredit);
  //   setTotalCredit(newTotalCredit);
  // }

  return (
    <>
      <Header></Header>
      <div className="flex w-9/12 mx-auto">
        <div className="w-3/4">
          <Courses handleAddToCourse_name={handleAddToCourse_name}
            // handleTotalCredit={handleTotalCredit}
          ></Courses>
        </div>
        <div className="w-1/4">
          <Course_name course_name={course_name} totalRemaining={totalRemaining} totalCredit={totalCredit}></Course_name>
        </div>
      </div>
     <ToastContainer />
    </>
  )
}

export default App
