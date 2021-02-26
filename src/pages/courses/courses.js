import React, { useState } from 'react';
import './courses.css';
import CardCta from '../../components/cardCta/cardCta';
import data from '../../data/courses'
import Cart from '../../components/cart/cart';

const Courses = () => {
    const [courses, setCourses] = useState(data)
    const [cart, setCart] = useState([])

    const handleAddCourse = (course) => {
        const newCart = [...cart, course]
        setCart(newCart);
    }

    return (
        <div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>
            <div className="courseContainer">
                {
                    courses.map(course => <CardCta course={course} handleAddCourse={handleAddCourse}></CardCta>)
                }
            </div>
        </div>
    );
};

export default Courses;