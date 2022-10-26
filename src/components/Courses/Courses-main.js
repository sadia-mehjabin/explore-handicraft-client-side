import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const CoursesMain = () => {
    const data = useLoaderData();
    return (
        <div className='d-flex'>
            <div className='w-25 p-5'>
            <Link>batik</Link>
            </div>
            <div>
            {data.map(singleData =>
             <CourseCard
            key={singleData.id}
            singleData={singleData}
            ></CourseCard>)}
            </div>
        </div>
    );
};

export default CoursesMain;