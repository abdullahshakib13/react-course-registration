import './App.css'
import Course_name from './components/Course_name/Course_name'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import { useState } from 'react'

function App() {
  const [course_name, setCourse_name] = useState([]);

  const handleAddToCourse_name = course => {
    // console.log(course);
    const addToCart = [...course_name, course];
    setCourse_name(addToCart);
   }

  return (
    <>
      <Header></Header>
      <div className="flex">
        <div>
          <Courses handleAddToCourse_name={handleAddToCourse_name}></Courses>
        </div>
        <Course_name course_name={course_name}></Course_name>
      </div>
      
    </>
  )
}

export default App
