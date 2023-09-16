# Online Courses

Welcome to our online course offerings! Below, you'll find a list of courses available for enrollment. Each course provides valuable knowledge and skills in various fields. Feel free to explore the details and decide which course suits your interests and goals.

## Courses

### 1. Introduction to C Programming

![Introduction to C Programming](https://i.ibb.co/ggYYhK5/Rectangle-2.png)

- **Course Details:** It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
- **Credit:** 3
- **Price:** $49.99

### 2. Introduction to Algorithms

![Introduction to Algorithms](https://i.ibb.co/8rwQ3Cf/Rectangle-2-1.png)

- **Course Details:** It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
- **Credit:** 4
- **Price:** $79.99

### 3. Introduction to C++ for DSA

![Introduction to C++ for DSA](https://i.ibb.co/5hrXcKJ/Rectangle-2-2.png)

- **Course Details:** It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
- **Credit:** 5
- **Price:** $99.99

## How to Enroll

To enroll in any of these courses, please follow these steps:

1. Click on the course name to view more details.
2. Review the course content, credit information, and pricing.
3. Click the "Enroll" button on the course page.
4. Follow the on-screen instructions to complete your enrollment.

## Contact Us

If you have any questions or need further assistance, please don't hesitate to contact our support team at [support@example.com](mailto:support@example.com).

We look forward to helping you expand your knowledge and skills!

# My React Project

Welcome to my React project! This README provides an overview of how to use the `useState` hook for state management within this project.

## Using `useState`

In this project, we make use of the `useState` hook, which is a built-in React hook for managing state in functional components. Here's a basic example of how to use it:

```jsx
import React, { useState } from 'react';
function App() {
  const [course_name, setCourse_name] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalRemaining, setTotalRemaining] = useState(0);

  const handleAddToCourse_name = course => {
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
    }
    setTotalCredit(count);

  }

```
