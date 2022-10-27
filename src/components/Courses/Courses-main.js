import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const CoursesMain = () => {
    const [categories, setCategories] = useState([])
    const data2 = useLoaderData();

    useEffect(() =>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCategories(data))
        
    })

    return (
        <div className='d-flex'>
            <div className='w-50 p-3'>
            {
                categories.map(category => 
                    <p key={category.id}><Link to={`/courses/${category.id}`}>{category.name}</Link></p>
                )
            }
            </div>
            <div>
            {data2.map(singleData =>
             <CourseCard
            key={singleData.id}
            singleData={singleData}
            ></CourseCard>)}
            </div>
        </div>
    );
};

export default CoursesMain;